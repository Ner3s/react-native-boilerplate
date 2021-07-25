import React, { ReactElement } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Home } from '../screens';

const App = createStackNavigator();

function AppRoutes(): ReactElement {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
}

export default AppRoutes;
