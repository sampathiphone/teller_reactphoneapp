// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { baseViewStyle } from './styles';
import { useDispatch } from 'react-redux';

export const BaseView = (props) => {
  const dispatch = useDispatch();
  const { style, children } = props;

  return (
    <SafeAreaView style = {[baseViewStyle.conatiner, style]}>
      {children}
    </SafeAreaView>
  );
};
