// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.

import  { Alert } from 'react-native';

export const showMessage = (title: string, message?: string, actions?: Array<Object> = [
  {
    text: "OK",
    onPress: () => console.log('OK Pressed')
  }
], cancelable: boolean = true) => {
  Alert.alert(
    title,
    message,
    actions,
    { cancelable }
  );
};
