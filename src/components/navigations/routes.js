import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import {
    LoginScreen,
    SignUpScreen
  } from "./../pages/authScreen1"


  import {
    Dashboard,
    ScanQR,
    ScanQRs
  } from "./../pages/mainScreen"

  import {
    HomeScreen,
    FoodsScreen,
    OrderDeliveryScreen,
    ItemScreen
    
  } from "./../pages/TakeOutScreen"




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

        {/* mainScreen */}

        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
        <Stack.Screen name="ScanQRs" component={ScanQRs} />


        {/* TakeOutScreen */}

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FoodsScreen" component={FoodsScreen} />
        <Stack.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        
      </Stack.Navigator>
      )
  }

  export default Routes