// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigator from './navigation';
import configureStore from './store';

const { persistor, store } = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,

    /*
     * primary: '#3498db',
     * accent: '#f1c40f',
     */
  },
};

export default function Entrypoint() {

  useEffect(() => {
    const init = async () => {
      // await RNBootSplash.show({ fade: true });
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <Provider store = {store}>
      <PersistGate loading = {<ActivityIndicator />} persistor = {persistor}>
        <PaperProvider theme = {theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
