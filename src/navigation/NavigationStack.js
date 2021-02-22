// @flow Copyright ©2020 SampathKumar, Inc. All Rights Reserved.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
import Login from '../features/login/containers';
import Home from '../features/home/containers';
import Signup from '../features/signup/containers';
import { colors } from '../config/colors';
import { styles } from './styles';
import images from '../config/images';
import { Image, View } from 'react-native';
import { NavigationDrawerHeader } from "../components";

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerTitle: (
    props, // App Logo
  ) => (
    <Image
      style = {styles.headerTitleView}
      source = {images.icons.logo}
      resizeMode = "contain"
    />
  ),
  headerRight: () => (
    <View />
  ),
  headerStyle: {
    backgroundColor: colors.COLOR_PRIMARY, // Set Header color
  },
  headerTintColor: colors.COLOR_WHITE, // Set Header text color
  headerTitleStyle: {
    fontSize: 20,
  },
  headerShown: true,
  headerBackTitle: '',
};

const AuthenticationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name = "Login"
      component = {Login}
      options = {defaultNavigationOptions}
    />
    <Stack.Screen
      name = "Signup"
      component = {Signup}
      options = {defaultNavigationOptions}
    />
  </Stack.Navigator>
);

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name = "Home"
      component = {Home}
      options = {{
        title: "Home",
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: colors.COLOR_PRIMARY,
        },
        headerTintColor: colors.COLOR_WHITE,
        headerTitleStyle: {
          fontSize: 20,
        },
        headerRight: () => (
          <NavigationDrawerHeader navigationProps = {navigation} />
        )
      }}
    />
  </Stack.Navigator>
);

function App() {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref = {navigationRef}>
      {isLoggedIn ?
        <HomeStack />
        :
        <AuthenticationStack />
      }
    </NavigationContainer>
  );
}

export default App;
