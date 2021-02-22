// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { BUTTON_TYPE, BaseView, CustomButton, TextInputLayer } from '../../../components';
import images from '../../../config/images';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { dobMaximumDateRequired, validateEmailAddress, validatePassword } from '../../../utils/stringUtils';
import UserModel from '../model/index';
import { showMessage } from '../../../utils/index';

export default function Signup({ navigation }) {
  const [userName, setUserName] = React.useState('XXXX');
  const [email, setEmail] = React.useState('XXXX@gmail.com');
  const [phoneNumber, setPhoneNumber] = React.useState('12345677890');
  const [dob, setDob] = React.useState('17/03/1991');
  const [password, setPassword] = React.useState('Apple@2020');
  const [confirmPassword, setConfirmPassword] = React.useState('Apple@2020');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  registerUserData = new UserModel();

  const handleConfirm = (date) => {
    setDob(moment(date).format('MM-DD-YYYY'));
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const validateSignUpProfileData = () => {
    let alertMessage;
    if (!userName) {
      alertMessage = 'Please enter your user name';
    } else if (!email) {
      alertMessage = 'Please enter your email name';
    } else if (!(validateEmailAddress(email))) {
      alertMessage = "Please enter valid email id";
    } else if (!phoneNumber) {
      alertMessage = 'Please enter your phone number';
    } else if (!dob) {
      alertMessage = 'Please enter your date of birth';
    } else if (!validatePassword(password)) {
      alertMessage = "Password must be at least 8 characters long, and contain an upper case letter and a number";
    } else if (!confirmPassword) {
      alertMessage = 'Please enter your confirm password';
    } else if (password !== confirmPassword) {
      alertMessage = 'Password and confirm password\'s are doesn\'t match, please check it!';
    }
    return alertMessage;
  };

  const onSignupProfile = () => {
    const validationErrorMessage = validateSignUpProfileData();
    if (validationErrorMessage) {
      showMessage('Alert', `\n${validationErrorMessage}`);
    } else {
      registerUserData.username = userName;
      registerUserData.email = email;
      registerUserData.phoneNumber = phoneNumber;
      registerUserData.dob = dob;
      registerUserData.password = password;

      console.log("registerUserData -------",registerUserData);

    }
  };


  return (
    <BaseView style = {styles.container}>
      <KeyboardAwareView>
        <ScrollView>

          <View style = {styles.headerView}>
            <Text style = {styles.headerTitle}>{'Sign up'}</Text>
          </View>

          <View style = {{ flex: 1, marginHorizontal: 20 }}>

            <TextInputLayer
              autoCapitalize = {false}
              iconLeft = {images.icons.man}
              headerTitle = {'User name'}
              placeholder = {'Enter user name'}
              value = {userName}
              onChangeText = {(text) => {
                setUserName(text);
              }
              }
            />

            <TextInputLayer
              autoCapitalize = {false}
              iconLeft = {images.icons.mail}
              headerTitle = {'Email'}
              placeholder = {'Enter Email Id'}
              value = {email}
              keyboardType = {'email-address'}
              onChangeText = {(text) => {
                setEmail(text);
              }
              }
            />

            <TextInputLayer
              autoCapitalize = {false}
              iconLeft = {images.icons.man}
              keyboardType = {'phone-pad'}
              headerTitle = {'Phone number'}
              placeholder = {'Enter phone number'}
              value = {phoneNumber}
              onChangeText = {(text) => {
                setPhoneNumber(text);
              }
              }
            />

            <TextInputLayer
              editable = {false}
              iconLeft = {images.icons.man}
              headerTitle = {'D.O.B'}
              placeholder = "MM-DD-YYYYY"
              value = {dob}
              onTouchStart = {() => {
                showDatePicker();
              }}
            />

            <TextInputLayer
              secureTextEntry
              iconLeft = {images.icons.password}
              headerTitle = {'Passsword'}
              placeholder = {'Enter Password'}
              value = {password}
              onChangeText = {(text) => {
                setPassword(text);
              }
              }
            />

            <TextInputLayer
              secureTextEntry
              iconLeft = {images.icons.password}
              headerTitle = {'Confirm Passsword'}
              placeholder = {'Enter Confirm Password'}
              value = {confirmPassword}
              onChangeText = {(text) => {
                setConfirmPassword(text);
              }
              }
            />

            <DateTimePickerModal
              isVisible = {isDatePickerVisible}
              mode = "date"
              maximumDate = {dobMaximumDateRequired()}
              date = {dobMaximumDateRequired()}
              onConfirm = {handleConfirm}
              onCancel = {hideDatePicker}
            />

          </View>
        </ScrollView>
      </KeyboardAwareView>

      <CustomButton style = {styles.loginButtonContainer}
        type = {BUTTON_TYPE.GREEN}
        titleStyle = {styles.buttontTitleStyle}
        title = {'Sign up'}
        onPress = {() => {
          onSignupProfile();
          // navigation.pop();
        }}
      />

    </BaseView>
  );
}
