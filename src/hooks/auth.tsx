import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  ReactElement,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ICredentials } from '~/models/Auth';
import { IUser } from '~/models/User';
import api from '~/services/api';
import SessionService from '~/services/Session';

interface AuthContextData {
  user: IUser | null;
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
  fakeSignIn(): void;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps): ReactElement {
  // Add our app name
  const PREFIX = '@SEU_APP_AQUI';

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        `${PREFIX}:user`,
        `${PREFIX}:token`,
      ]);

      if (storagedUser[1] && storagedToken[1]) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken[1]}`;
        setUser(JSON.parse(storagedUser[1]));
      }
    }

    loadStoragedData();
  }, []);

  const signOut = (): void => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
    api.defaults.headers.Authorization = '';
  };

  const signIn = async ({ email, password }: ICredentials): Promise<void> => {
    const response = await SessionService.signIn({ email, password });

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;

    await AsyncStorage.multiSet([
      [`${PREFIX}:token`, response.data.data.token],
      [`${PREFIX}:user`, JSON.stringify(response.data.user)],
    ]);
  };

  const fakeSignIn = (): void => {
    setUser({
      id: 1,
      name: 'Teste',
      email: 'string@mail.com',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
        fakeSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
