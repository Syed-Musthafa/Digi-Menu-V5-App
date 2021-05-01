import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Image } from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


import { COLORS, FONTS, icons, images, SIZES } from '../../exports'

const ScanQRs = ({navigation}) => {

    ifScaned = e=> {
        Linking.openURL(e.data).catch(err => 
            Alert.alert("Invalid QRCode", e.data));
    }


    return (
        <View style={{ flex:1, }}>
        <View style={{ backgroundColor:COLORS.white}} >
        <View style={{ flexDirection:'row', marginTop:SIZES.padding * 3, paddingHorizontal: SIZES.padding * 3}}>
                <TouchableOpacity
                style={{
                    width:45,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                onPress={() => {navigation.navigate('Dashboard')}}
                >
                    <Image source={icons.close} style={{ width:20, height:20, tintColor:COLORS.black}} />
                </TouchableOpacity>

                <View style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:COLORS.black,   }}>Scan for Booking</Text>
                </View>

                


            </View>
        </View>
       <QRCodeScanner
       containerStyle={{ flex:1, backgroundColor:'#FFF', marginBottom:210 }}
       onRead={ifScaned}
       reactivate={true}
       permissionDialogMessage="Need Permission To Access Camera"
       reactivateTimeout={10}
       showMarker={true}
       markerStyle={{ borderColor:'#FFF', borderRadius:10}}
    //    topContent={
    //       <View>
    //           <Text>poda</Text>
    //       </View>
    //     }
    //    bottomContent={
    //        <TouchableOpacity>
    //            <Text style={{fontSize:25, color:'rgb(0,122,255)'}}>Scan QR Code</Text>
    //        </TouchableOpacity>
    //    } 
    />
       </View>
    )
}

export default ScanQRs

const styles = StyleSheet.create({})
