// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { Modal,  Text,  View } from 'react-native';
import { BUTTON_TYPE, BaseView, CustomButton } from '../../../../components';
import styles from './styles';
import {  CreditCardInput } from "react-native-input-credit-card";

export const ModalPaymentCardForm = (props) => {
  const { isVisible, onPressCardFormDismiss, onPressCardFormSubmit } = props;
  const [formData, setFormData] = React.useState(null);
  const [isValidCardData, setIsValidCardData] = React.useState(false);

  return (
    <Modal
      animationType = "slide"
      transparent = {false}
      visible = {isVisible}>
      <View style = {styles.baseContainer}>
        <BaseView>
          <View style = {styles.headerView}>
            <Text style = {styles.headerTitle}>{"Pay with card"}</Text>
          </View>

          <View style = {styles.cardInput}>
            <CreditCardInput
              autoFocus = {true}
              requiresName
              requiresPostalCode
              onChange = {(form) => {
                setFormData(form);
                setIsValidCardData(form.valid);
              }}
            />
          </View>

          <CustomButton
            disabled = {!isValidCardData}
            style = {styles.buttonConfirm}
            type = {BUTTON_TYPE.GREEN}
            title = {'Confirm Payment'}
            onPress = {() => {
              onPressCardFormSubmit && onPressCardFormSubmit(formData);
            }} />

          <CustomButton
            style = {styles.buttonCancel}
            type = {BUTTON_TYPE.BORDER_BLUE}
            title = {'Cancel'}
            onPress = {() => {
              onPressCardFormDismiss && onPressCardFormDismiss();
            }} />
        </BaseView>
      </View>
    </Modal>
  );
};
