

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,StatusBar,ImageBackground, Animated } from 'react-native'

import ToggleSwitch from 'toggle-switch-react-native'
import { useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { COLORS, icons, images, SIZES } from '../../exports'


const ConfirmedScreen = ({navigation}) => {

    const isFocused = useIsFocused();

    const [state, setState] = React.useState({

        isOnBlueToggleSwitch: false
    })


    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding2, marginTop: 30 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: SIZES.padding,
                            borderRadius: 50,
                            backgroundColor: "#ffffff",
                            width: 40,
                            ...styles.shadow
                        }}
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image
                            source={icons.arrow_Left}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: '#333' }}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: SIZES.padding,
                            borderRadius: 50,
                            backgroundColor: "#f78da7E6",
                            width: 45
                        }}>
                        <Image
                            source={icons.heart_red}
                            resizeMode="contain"
                            style={{ width: 20, height: 20, tintColor: '#ffffff' }}

                        />
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )
    }


    function renderContent() {
        return (
            <View style={{ padding:SIZES.padding, justifyContent:'center', alignItems:'center'}}>
                   <View style={{ backgroundColor:COLORS.primary, width:100, height:100, borderRadius:50, justifyContent:'center', alignItems:'center'}}>
                       <Image source={icons.bell} resizeMode="contain"  style={{ width:50, height:50, tintColor:COLORS.white}}/>
                   </View>

                   {/* Confirm message */}

                   <View style={{ justifyContent:'center', alignItems:'center'}}>
                       <View style={{ padding:SIZES.padding, justifyContent:'center', alignItems:'center'}}>
                           <Text style={{ fontSize:24}}>Your booking has</Text>
                           <Text style={{ fontSize:24}}>been <Text style={{ fontWeight:'bold'}}>confirmed</Text></Text>
                       </View>

                       <View style={{ padding:SIZES.padding, justifyContent:'center', alignItems:'center' }}>
                           <Text style={{ fontSize:14}}>You can manage your booking in </Text>
                           <Text style={{ fontSize:14}}>"Manage Booking" section</Text>
                       </View>

                       {/* line */}

                       <View style={{ borderWidth:0.5, width:300, marginTop:10, borderColor:COLORS.gray}} />

                   </View>

                    {/* Restuarent details */}

                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                       <View style={{ padding:SIZES.padding, justifyContent:'center', alignItems:'center'}}>
                           <Text style={{ fontSize:25}}>Al-Qareeb</Text>
                           
                       </View>

                       <View style={{ padding:SIZES.padding, flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                           <Text style={{ fontSize:12}}>12:30PM </Text>
                           <Text style={{ fontSize:12}}>- 13 Aug, 2021</Text>
                           <Text style={{ fontSize:12}}>- 2 persons</Text>
                       </View>

                       <View>
                           <Text style={{ fontSize:17}}>Booking No. <Text style={{ fontWeight:'bold'}}>#78632</Text> </Text>
                       </View>

                       {/* line */}

                       <View style={{ borderWidth:0.5, width:300, marginTop:20, borderColor:COLORS.gray}} />

                   </View>
               



            </View>
        )
    }

    function renderButton() {
        return (
            <View
                style={{

                    padding: SIZES.padding

                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            height: 50,
                            padding: SIZES.padding,
                            backgroundColor: "#349665",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        // onPress={() => { navigation.navigate("InformationScreen") }}
                    >
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>DONE</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }





    return (
       <View style={styles.container}>
        { isFocused && <StatusBar translucent backgroundColor={COLORS.tranparent} barStyle="light-content" /> }
        <ImageBackground
        source={images.homepage}
        
        style={{ flex: 1, width:SIZES.width, height:300 }}>
                {renderHeader()}
            </ImageBackground>
            <Animatable.View
                    useNativeDriver
                    animation="fadeInUpBig"
                    delay={500}
                    style={{ flex: 2, borderTopRightRadius: 50, borderTopLeftRadius: 50, backgroundColor: '#fff', padding: SIZES.padding * 3 }}>
                {renderContent()}
                {renderButton()}
            
            </Animatable.View>
            </View>
    )
}

export default ConfirmedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})


