import React from 'react'
import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'

import { COLORS, FONTS, icons, images, SIZES } from '../../exports'

const ScanQR = ({ navigation}) => {

    function renderHeader() {
        return(
            <View style={{ flexDirection:'row', marginTop:SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3}}>
                <TouchableOpacity
                style={{
                    width:45,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                onPress={() => {navigation.navigate('Dashboard')}}
                >
                    <Image source={icons.close} style={{ width:20, height:20, tintColor:COLORS.white}} />
                </TouchableOpacity>

                <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:COLORS.white, ...FONTS.body3 }}>Scan for Booking</Text>
                </View>

                <TouchableOpacity
                style={{
                    height:45,
                    width:45,
                    backgroundColor:'#349665',
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                onPress={()=> console.log("Info")}
                >
                    {/* <Image  source={icons.star} style={{ height:15, height:15, tintColor:COLORS.white}} /> */}
                </TouchableOpacity>


            </View>
        )
    }

    function renderPaymentMethods(){
        return(
            <View
              style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right:0,
                  height: 220,
                  padding:SIZES.padding * 3,
                  borderTopRightRadius:SIZES.radius,
                  borderTopLeftRadius:SIZES.radius,
                  backgroundColor:COLORS.white
              }}
            >

            </View>
        )
    }

    return (
        <View style={{ flex:1, backgroundColor:COLORS.tranparent}}>
           <RNCamera
        //    ref={ref => {
        //        this.camera = ref
        //    }}
           style={{ flex:1}}
           captureAudio={false}
           type={RNCamera.Constants.Type.back}
           flashMode={RNCamera.Constants.FlashMode.off}
           androidCameraPermissionOptions={{
               title: 'Permission to use Camera',
               message:'Camera is required for Scanning',
               buttonPositive:"ok",
               buttonNegative:"Cancel"
           }}

           >
               {renderHeader()}
               {renderPaymentMethods()}
           </RNCamera>
        </View>
    )
}

export default ScanQR

const styles = StyleSheet.create({})
