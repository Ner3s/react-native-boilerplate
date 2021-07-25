import 'react-native-gesture-handler';
import React, { ReactElement, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Updates from 'expo-updates';
import { ThemeProvider } from 'styled-components/native';

import Routes from '~/router';
import { light } from '~/styles/themes';

export default function App(): ReactElement {
  useEffect(() => {
    async function updateApp(): Promise<void> {
      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();

          await Updates.reloadAsync();
        }
      }
    }
    updateApp();
  }, []);
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar backgroundColor="#222" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
