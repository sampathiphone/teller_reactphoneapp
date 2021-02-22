// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import { ScaledSheet } from 'react-native-size-matters';
import {  Platform } from 'react-native';

const titlePaddingRight = Platform.OS === 'android' ? 30 : 0;
export const styles = ScaledSheet.create({
  headerTitleView: {
    width: 140,
    height: 35,
    alignSelf:'center',
    paddingRight: titlePaddingRight
  }
});
