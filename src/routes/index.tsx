import React, { ReactElement } from 'react';

import { useAuth } from '~/hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes(): ReactElement {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
