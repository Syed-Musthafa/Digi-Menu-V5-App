import React, { Component, useEffect } from 'react';
import { Text, View , StatusBar, BackHandler, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { COLORS, icons, images, SIZES } from './src/components/exports'

import Routes from './src/components/navigations/routes'



const App = () => {
  return ( 


    <NavigationContainer>
      {/* <StatusBar backgroundColor="#50B282" barStyle="light-content" /> */}
      {/* <StatusBar translucent backgroundColor={COLORS.tranparent} /> */}
      <Routes />
      {/* <Drawer /> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
