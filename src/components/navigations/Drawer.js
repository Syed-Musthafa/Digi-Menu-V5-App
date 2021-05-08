import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem

} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import { SIZES ,COLORS, images} from '../exports';




export function DrawerContent(props) {

  // const isFocused = useIsFocused();
 
    // console.log("progress", props.progress);
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex:1}}>
        <View>

       

        <View style={{ flex:1, padding:SIZES.padding2, alignItems:"center", justifyContent:'center'}}>
            <Text style={{ fontSize:40, fontWeight:'bold'}}>
                Menu
            </Text>
        </View>
            <DrawerItem
                icon={({color, size}) => (
                  // <Icon name="home" color={color} size={size} style={{marginTop:20}} />
                  <View style={{ marginTop:23}}>
                  <Image source={images.qr} resizeMode="contain" style={{ width:30, height:30}} />
                  </View>
                )}
                label="Scan QR"
                labelStyle={{marginLeft: -16, marginTop:20}}
                onPress={() => {
                  props.navigation.navigate('ScanQRs');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <View style={{}}>
                  <Image source={images.takeout} resizeMode="contain" style={{ width:30, height:30}} />
                  </View>
                )}
                label="Take out"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('HomeScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <View style={{ }}>
                  <Image source={images.tableBooking} resizeMode="contain" style={{ width:30, height:30}} />
                  </View>
                )}
                label="Table booking"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('BookHomeScreen');
                }}
              />
              
             
            </View>  
            <View style={{ flex:1 , justifyContent:'flex-end', marginBottom:20}}>
            <DrawerItem
                icon={({color, size}) => (
                  <Icon name="logout" color={color} size={size} />
                )}
                label="Logout"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              />
            </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({})
