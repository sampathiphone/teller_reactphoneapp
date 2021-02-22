// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../actions';
import styles from './styles';
import { BUTTON_TYPE, BaseView, CustomButton, TextInputLayer } from '../../../components';
import images from '../../../config/images';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';

export default function Login({ navigation }) {
  const id = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const [valueEmail, onChangeTextEmail] = React.useState('');
  const [valuePassword, onChangeTextPassword] = React.useState('');

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <BaseView style = {styles.container}>
      <KeyboardAwareView>
        <ScrollView>

          <View style = {styles.headerView}>
            <Text style = {styles.headerTitle}>{'Log in'}</Text>
          </View>

          <View style = {{ flex: 1, marginHorizontal: 20 }}>
            <TextInputLayer
              autoCapitalize = {false}
              iconLeft = {images.icons.mail}
              headerTitle = {'Email'}
              placeholder = {'Enter Email Id'}
              value = {valueEmail}
              keyboardType = {'email-address'}
              onChangeText = {(text) => {
                onChangeTextEmail(text);
              }
              }
            />

            <TextInputLayer
              autoCapitalize = {false}
              iconLeft = {images.icons.password}
              headerTitle = {'Passsword'}
              placeholder = {'Enter Password'}
              value = {valuePassword}
              onChangeText = {(text) => {
                onChangeTextPassword(text);
              }
              }
            />

            <CustomButton style = {styles.loginButtonContainer}
              type = {BUTTON_TYPE.GREEN}
              titleStyle = {styles.buttontTitleStyle}
              title = {'Log in'}
              onPress = {() => {
                onLogin();
              }}
            />

            <View style = {styles.noAccountContainer}>
              <View style = {styles.divider} />

              <Text
                style = {styles.noAccountLabel}>
                {'Don\'t have an account?'}
              </Text>

              <View style = {styles.divider} />
            </View>

            <CustomButton style = {styles.signupButtonContainer}
              type = {BUTTON_TYPE.BORDER_BLUE}
              title = {'Sign up'}
              titleStyle = {styles.buttontTitleStyle}
              onPress = {() => {
                navigation.navigate('Signup');
              }}
            />
          </View>

        </ScrollView>
      </KeyboardAwareView>
    </BaseView>
  );
}
