import { AxiosPromise } from 'axios';

import { IUser } from '~/models/User';

import { ICredentials } from '../models/Auth';
import api from './api';

const SessionService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn(
    data: ICredentials,
  ): AxiosPromise<{ user: IUser; data: { token: string } }> {
    return api.post('/auth/signin', data);
  },
};

export default SessionService;
