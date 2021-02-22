// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import images from '../../config/images';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import * as loginActions from '../../features/login/actions';

export const NavigationDrawerHeader = (props) => {
  const dispatch = useDispatch();

  const onPressLogout = () => {

    Alert.alert(
      "Teller LLC",
      "\nAre you sure you want to Logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            dispatch(loginActions.logOut());
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress = {() => {
        onPressLogout();
      }}>
        <Image style = {styles.moreIcon}
          source = {images.icons.logout} resizeMode = "contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  notificationIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    tintColor: '#000000'
  },
  hamburgerMenuIcon: {
    width: 24,
    height: 17,
    marginLeft: 10
  },
  container: {
    flexDirection: 'row',
  },
  moreIcon: {
    width: 18,
    height: 18,
    marginRight: 15,
    tintColor: 'white'
  },
});
