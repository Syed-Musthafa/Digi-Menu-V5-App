import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import {
    LoginScreen,
    SignUpScreen
  } from "./../pages/authScreen1"


  import {
    Dashboard,
    ScanQR
  } from "./../pages/mainScreen"



  const Stack = createStackNavigator();

  const Routes = () => {
      return(
        <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        // initialRouteName={"Login"}
        headerMode="none"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
        
      </Stack.Navigator>
      )
  }

  export default Routes