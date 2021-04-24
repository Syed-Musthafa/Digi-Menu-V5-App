import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,StatusBar } from 'react-native'

import ToggleSwitch from 'toggle-switch-react-native'
import { useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { COLORS, icons, images, SIZES } from '../../exports'


const SignUpScreen = ({navigation}) => {

    const isFocused = useIsFocused();

    const [state, setState] = React.useState({

        isOnBlueToggleSwitch: false
    })


    function renderHeader() {
        return (
            <View style={{ width: '100%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                            padding: SIZES.padding,
                            borderRadius: 50,
                            backgroundColor: "#dddddd4D",
                            marginLeft: 20,
                            marginTop: 25,
                            width: 45
                        }} >
                        <Image source={icons.arrow_Left} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                    <View style={{ padding: SIZES.padding, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10, }}>
                        <Text style={{ fontSize: 16, color: COLORS.white, marginTop: 30 }}>Need some help ?</Text>
                    </View>
                </View>
            </View>
        )
    }


    function renderContent() {
        return (
            <View>
                {/* heading */}
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Getting started</Text>
                    <Text style={{ fontSize: 15, color: COLORS.gray1, marginTop: 5 }}>create a account to continue !</Text>
                </View>

                {/* links */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            backgroundColor: "#dddddd4D",
                        }}>
                            <Image source={images.google} resizeMode="contain" style={{ width: 55, height: 55 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={images.faceBook} resizeMode="contain" style={{ width: 50, height: 50, tintColor: '#39569c' }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={images.twitter} resizeMode="contain" style={{ width: 55, height: 55 }} />
                        </View>
                    </View>
                </View>

                {/* sign form */}

                <View>
                    <View style={{ marginTop: 30 }}>

                        <View style={{ flexDirection: 'row', backgroundColor: "#eee", borderRadius: 10, }}>
                            <Image
                                source={icons.email}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                            />
                            <TextInput
                                placeholder=" Email Address"
                                placeholderTextColor={COLORS.gray}
                                style={[styles.textInput, { color: '#333', marginLeft: 10 }]}
                                autoCapitalize="none"

                            />
                        </View>


                        <View style={{ flexDirection: 'row', backgroundColor: "#eee", borderRadius: 10, marginTop: 20 }}>
                            <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                            />
                            <TextInput
                                placeholder="UserName"
                                placeholderTextColor={COLORS.gray}
                                secureTextEntry={true}
                                style={[styles.textInput, { color: '#333', marginLeft: 10 }]}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ flexDirection: 'row', backgroundColor: "#eee", borderRadius: 10, marginTop: 20 }}>
                            <Image
                                source={icons.lock}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                            />
                            <TextInput
                                placeholder="Enter the password"
                                placeholderTextColor={COLORS.gray}
                                secureTextEntry={true}
                                style={[styles.textInput, { color: '#333', marginLeft: 10 }]}
                                autoCapitalize="none"

                            />
                        </View>

                    </View>
                </View>

                {/* remind me */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <View style={{}}>
                    <Text style={{ fontSize:16, fontWeight:'bold'}}>Reminder me next Time</Text>
                    </View>
                    <View style={{}}>
                        <ToggleSwitch

                            onColor="#2196F3"
                            isOn={state.isOnBlueToggleSwitch}
                            onToggle={isOnBlueToggleSwitch => {
                                setState({ isOnBlueToggleSwitch });

                            }}
                        />
                    </View>
                </View>

                {/* Button */}

                <View style={{ marginTop: 10, height: 180, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', marginTop: 10 }}
                        onPress={() => {  }}
                    >
                        <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#2a8457', width: "100%", height: 45, borderRadius: 10 }}>
                            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>SIGN UP</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={{ flexDirection:'row', padding:10, justifyContent:'center', alignItems:'center', marginTop:10}}>
                        <Text style={{ fontSize:16}}>Already have an account ?</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                            <Text style={{ color:"#FBC401", marginLeft:5,fontSize:16}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>




            </View>
        )
    }





    return (
        <View style={styles.container}>
        { isFocused && <StatusBar backgroundColor='#349665' barStyle="light-content" /> }
            <View style={{ flex: 1, backgroundColor: '#349665' }}>
                {renderHeader()}
            </View>
            <Animatable.View
                    useNativeDriver
                    animation="fadeInUpBig"
                    delay={500}
                    style={{ flex: 5, borderTopRightRadius: 50, borderTopLeftRadius: 50, backgroundColor: '#fff', padding: SIZES.padding * 3 }}>
                {renderContent()}
            
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#349665'
    }
})


