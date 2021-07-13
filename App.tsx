import React, { ReactElement, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Updates from 'expo-updates';
import FlashMessage from 'react-native-flash-message';

import AppProvider from '~/hooks';
import Routes from '~/routes';

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
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Routes />
        <FlashMessage position="top" />
      </AppProvider>
    </NavigationContainer>
  );
}
