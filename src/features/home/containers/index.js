// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { BUTTON_TYPE, BaseView, CustomButton } from '../../../components';
import images from '../../../config/images';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { CurrencyButtonComponent } from '../components';
import { ModalPaymentCardForm } from '../components/ModalPaymentCardForm/index';
import stripe from 'tipsi-stripe';

const DESCRIPTION = 'Teller is a money transfer app which allows you to transfer money online, from your debit or credit cards to any bank account. You can transfer money from debit cards or credit cards of ICICI, HDFC, Citibank, SBI and more to any bank account and the transferred amount will reflect in your bank account instantly. Cashout ensures a seamless procedure for online money transfer service thus making your money transfers from credit cards to bank account, quick and hassle free. With the help of Cashout, you can also pay your bills, such as you credit card bills, from your credit card. Putting in a nutshell, Cashout aims to make online money transfers from credit cards to bank account simple, instant and hassle free.';
const CONTRIBUTE_CHILD_TRUST = 'We protect our community and its privacy by providing it for free & without any unnecessary advertisements (noise!). With your partnership, we can continue to do this. Even the smallest contribution goes a long way and is greatly appreciated. Teller is focused on enabling meaningful connections that make a positive impact. We do not generate revenue from this. In order to help us provide this value to our community, please consider contributing to Teller LLC once in a while. The process is quick and simple, and every dollar is much appreciated. ALL funds raised will go toward the child trust of Teller LLC . We cannot thank you enough for your support.';

export default function Home({ navigation }) {
  const [amount, setAmount] = React.useState(10);
  const [showPaymentCardForm, setshowPaymentCardForm] = React.useState(false);

  const makeStripeCardPayment = async (formData) => {
    stripe.setOptions({
      publishableKey: '',
    });

    const cardNumber = formData.values.number.replace(/\s+/g, '');
    const cardMonthAndExpiry = formData.values.expiry.split('/');
    const cardData = {
      number: cardNumber,
      expMonth: Number(cardMonthAndExpiry[0]),
      expYear: Number(cardMonthAndExpiry[1]),
      cvc: formData.values.cvc,
      name: formData.values.name
    };

    try {
      const response = await stripe.createTokenWithCard(cardData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <BaseView>
      <KeyboardAwareView>
        <ScrollView>

          <ModalPaymentCardForm
            isVisible = {showPaymentCardForm}
            onPressCardFormDismiss = {() => {
              setshowPaymentCardForm(false);
            }}
            onPressCardFormSubmit = {(formData) => {
              makeStripeCardPayment(formData);
            }}
          />

          <View style = {styles.container}>
            <Text
              style = {styles.titleText}>
              {'Welcome to Teller'}
            </Text>

            <Image
              style = {styles.bannerImage}
              source = {images.background.banner} />

            <Text
              style = {styles.subTitle}>
              {"Transfer money instantly to your Bank Account. \n"}
            </Text>

            <Text
              style = {styles.descriptionText}>
              {DESCRIPTION}
            </Text>

            <Text
              style = {styles.subTitle}>
              {"Contribute \n"}
            </Text>

            <Text
              style = {styles.descriptionText}>
              {CONTRIBUTE_CHILD_TRUST}
            </Text>

            <CurrencyButtonComponent
              style = {styles.currencyButtonContainer}
              onSelect = {(selectedValue) => {
                setAmount(selectedValue === 'Others' ? 0 : selectedValue);
              }} />

          </View>
        </ScrollView>

        <CustomButton style = {styles.paymentButtonContainer}
          type = {BUTTON_TYPE.GREEN}
          titleStyle = {styles.buttontTitleStyle}
          title = {'Contribute via Stripe'}
          onPress = {() => {
            setshowPaymentCardForm(true);
          }}
        />

      </KeyboardAwareView>
    </BaseView>
  );
}
