// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { colors } from '../../config/colors';

export const TextInputLayer = (props) => {
  return (
    <View
      style = {[styles.textInputContainer, props.style]}>
      <View style = {styles.headerContainer}>
        <Text style = {styles.textInputHeadingLabel}>{props.headerTitle}</Text>
      </View>

      <View style = {[styles.textInputLayer, props.textInputStyle]}>
        <>
          {props.iconLeft && (
            <Image source = {props.iconLeft} style = {styles.iconLeft} />
          )}

          <TouchableOpacity style = {styles.onTouch} onPress = {props.onTouchStart}>
            <TextInput
              {...props}
              editable = {props.editable}
              keyboardType = {props.keyboardType}
              secureTextEntry = {props.secureTextEntry}
              style = {[styles.textInput, props.textInputStyle, { color: colors.COLOR_TEXT_INPUT_HEADING, backgroundColor: colors.COLOR_TEXTINPUT_BACKGROUND }]}
              onChangeText = {props.onChangeText}
              placeholder = {props.placeholder}
              placeholderTextColor = {colors.COLOR_TEXT_INPUT_PLACEHOLDER}
              value = {props.value}
              maxLength = {props.maxLength}
              autoCapitalize = {props.autoCapitalize}
            />
          </TouchableOpacity>

          {props.iconRight && (
            <TouchableOpacity onPress = {props.onPressEye}>
              <Image source = {props.iconRight} style = {[styles.iconRight, { tintColor: colors.COLOR_TEXT_INPUT_ICON }]} />
            </TouchableOpacity>)
          }
        </>
      </View>
    </View>
  );
};
