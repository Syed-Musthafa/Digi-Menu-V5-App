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
    ItemScreen,
    CheckOutScreen
  } from "./../pages/TakeOutScreen"


  import {
    BookHomeScreen,
    BookTableScreen,
    DateScreen,
    ConfirmedScreen,
    InformationScreen,
    MembersScreen,
    TimeScreen
   
  } from "./../pages/TableBookingScreen"




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
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />

          {/* TableBookingScreen */}

          <Stack.Screen name="BookHomeScreen" component={BookHomeScreen} />
          <Stack.Screen name="BookTableScreen" component={BookTableScreen} />
          <Stack.Screen name="DateScreen" component={DateScreen} />
          <Stack.Screen name="ConfirmedScreen" component={ConfirmedScreen} />
          <Stack.Screen name="InformationScreen" component={InformationScreen} />
          <Stack.Screen name="MembersScreen" component={MembersScreen} />
          <Stack.Screen name="TimeScreen" component={TimeScreen} />

        
      </Stack.Navigator>
      )
  }

  export default Routes