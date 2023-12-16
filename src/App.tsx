import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import ApplicationNavigator from './navigators/Application';
import { useTranslation } from 'react-i18next';
import './translations';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { registerTranslation } from 'react-native-paper-dates';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
const App = () => {
  const { t } = useTranslation(['datepicker']);
  const myNavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      color: 'transparent',
      secondaryContainer: 'transparent',
    },
  };

  registerTranslation('custom', {
    save: t('datepicker:save'),
    selectSingle: t('datepicker:selectSingle'),
    selectMultiple: t('datepicker:selectMultiple'),
    selectRange: t('datepicker:selectRange'),
    notAccordingToDateFormat: inputFormat =>
      t('datepicker:notAccordingToDateFormat', { inputFormat }),
    mustBeHigherThan: date => t('datepicker:mustBeHigherThan', { date }),
    mustBeLowerThan: date => t('datepicker:mustBeLowerThan', { date }),
    mustBeBetween: (startDate, endDate) =>
      t('datepicker:mustBeBetween', { startDate, endDate }),
    dateIsDisabled: t('datepicker:dateIsDisabled'),
    previous: t('datepicker:previous'),
    next: t('datepicker:next'),
    typeInDate: t('datepicker:typeInDate'),
    pickDateFromCalendar: t('datepicker:pickDateFromCalendar'),
    close: t('datepicker:close'),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <BottomSheetModalProvider>
            <PaperProvider theme={myNavigationTheme}>
              <ApplicationNavigator />
              <Toast />
            </PaperProvider>
          </BottomSheetModalProvider>
        </PersistGate>
      </StoreProvider>
    </GestureHandlerRootView>
  );
};

export default App;
