// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { BUTTON_TYPE, BaseView, CustomButton } from '../../../components';
import images from '../../../config/images';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { CurrencyButtonComponent } from '../components';

const DESCRIPTION = 'Teller is a money transfer app which allows you to transfer money online, from your debit or credit cards to any bank account. You can transfer money from debit cards or credit cards of ICICI, HDFC, Citibank, SBI and more to any bank account and the transferred amount will reflect in your bank account instantly. Cashout ensures a seamless procedure for online money transfer service thus making your money transfers from credit cards to bank account, quick and hassle free. With the help of Cashout, you can also pay your bills, such as you credit card bills, from your credit card. Putting in a nutshell, Cashout aims to make online money transfers from credit cards to bank account simple, instant and hassle free.'

export default function Home({ navigation }) {
  const [amount, setAmount] = React.useState(10);

  return (
    <BaseView>
      <KeyboardAwareView>
        <ScrollView>

          <View style={styles.container}>
            <Text
              style={styles.titleText}>
              {'Welcome to Teller'}
            </Text>

            <Image
              style={styles.bannerImage}
              source={images.background.banner} />

            <Text
              style={styles.subTitle}>
              {"Transfer money instantly to your Bank Account. \n"}
            </Text>

            <Text
              style={styles.descriptionText}>
              {DESCRIPTION}
            </Text>

            <CurrencyButtonComponent
            style = {styles.currencyButtonContainer}
            onSelect = {(selectedValue) => {
              setAmount(selectedValue === 'Others' ? 0 : selectedValue);
            }} />

          </View>
        </ScrollView>

        <CustomButton style={styles.paymentButtonContainer}
          type={BUTTON_TYPE.GREEN}
          titleStyle={styles.buttontTitleStyle}
          title={'Make payment via Stripe'}
          onPress={() => {
          }}
        />

      </KeyboardAwareView>
    </BaseView>
  );
}
