// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.

import { AppRegistry } from 'react-native';
import App from './src/Entrypoint';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
