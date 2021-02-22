// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../config/colors';

export const BUTTON_TYPE = {
  GREEN: 'GREEN',
  BLUE: 'BLUE',
  BORDER_BLUE: 'BORDER_BLUE'
};

export const CustomButton = (props) => {
  let buttonTypeStyle = {};
  let textColor = colors.COLOR_WHITE;
  const titleStyle = styles.titleRegular;

  switch (props.type) {
  case BUTTON_TYPE.GREEN:
    buttonTypeStyle = styles.primaryButtonStyle;
    break;
  case BUTTON_TYPE.BLUE:
    buttonTypeStyle = styles.secondaryButtonStyle;
    break;
  case BUTTON_TYPE.BORDER_BLUE:
    buttonTypeStyle = [styles.borderBlueButtonStyle];
    textColor = colors.COLOR_BORDER_BLUE;
    break;
  default:
    break;
  }

  return (
    <TouchableOpacity style = {[styles.container, buttonTypeStyle, props.style]}
      disabled = {props.disabled || false}
      onPress = {props.onPress}>
      { props.icon &&
       <Image
         style = {[styles.buttonIcon, props.iconStyle]}
         resizeMode = {'contain'}
         source = { props.icon }
       />}

      <Text style = {[ titleStyle, { color: textColor }, props.titleStyle, props.disabled]}>
        {props.title ? props.title : ''}
      </Text>
    </TouchableOpacity>
  );
};
