import React, { ReactNode, ReactElement } from 'react';

import { AuthProvider } from './auth';

interface IAppProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProps): ReactElement => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
