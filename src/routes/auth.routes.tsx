import React, { ReactElement } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Profile } from '~/screens';

const AuthStack = createStackNavigator();

function AuthRoutes(): ReactElement {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <AuthStack.Screen name="Profile" component={Profile} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
