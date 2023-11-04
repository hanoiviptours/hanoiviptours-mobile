import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import Toast from 'react-native-toast-message';

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

const App = () => {
  const myNavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      color: 'transparent',
      secondaryContainer: 'transparent',
    },
  };

  return (
    <StoreProvider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={myNavigationTheme}>
            <ApplicationNavigator />
            <Toast />
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
