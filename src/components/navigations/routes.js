import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


import { DrawerContent } from "./Drawer";

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




  const Drawer = createDrawerNavigator();

  const Stack = createStackNavigator();


  const Screens = ({navigation , style}) => {
    return (
      <Animated.View style={[{flex: 1, overflow:'hidden'}, style]}>
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
     
      </Animated.View>
    )
  }

  const Routes = () => {

    const [progress, setProgress] = React.useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
  
    const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 10],
    })
    
  
  
    const screensStyles = { borderRadius, transform: [{scale}] };

      return(
       <Drawer.Navigator headerMode="none"
    drawerType="slide"
    overlayColor="tranparent"
    drawerStyle={{ width:'55%', backgroundColor:"transparent"}}
    contentContainerStyle={{ flex:1}}
    drawerContentOptions={{
      activeBackgroundColor:"tranparent",
      activeTintColor:"green",
      inactiveTintColor:"green"
    }}
    sceneContainerStyle={{backgroundColor:"transparent"}}
    // initialRouteName=""
     drawerContent={(props) => {
     setProgress(props.progress);

     return <DrawerContent {...props} />
     }} 
     >

   

            <Drawer.Screen name="Screens"  >
            {props => <Screens {...props} style={screensStyles} />}
            </Drawer.Screen>
           
   </Drawer.Navigator>
      )
  }

  export default Routes