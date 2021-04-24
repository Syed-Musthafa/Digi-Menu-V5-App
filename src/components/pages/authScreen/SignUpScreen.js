

import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native'


import { COLORS, icons, images, SIZES } from '../../exports'

const SignUpScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View>
                <View style={{padding: SIZES.padding,}}>
                    <TouchableOpacity
                    style={{ 
                        justifyContent: 'center',
                         alignItems: 'flex-start',
                          marginTop: 50, 
                          padding:SIZES.padding,
                           borderRadius:50, 
                           backgroundColor:"#dddddd4D" ,
                           width:40,
                           marginLeft:20,
                           marginTop:25
                           }} >
                        <Image source={icons.arrow_Left} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20 }} />
                    </TouchableOpacity>
                    <View style={{ padding: SIZES.padding, width: '90%', justifyContent: 'center', alignItems: 'flex-start', marginLeft:10, }}>
                        <Text style={{ fontSize: 30, color: COLORS.black, marginTop: 30 }}>Sign Up</Text>
                    </View>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                    <View style={styles.inputContainer}>
                        <View>
                            <View style={{ marginBottom: 10 }} >
                                <Text >Full name</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
                                <Image
                                    source={icons.profile}
                                    resizeMode="contain"
                                    style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                                />
                                <TextInput
                                    placeholder="Input name"
                                    placeholderTextColor={COLORS.gray}
                                    style={[styles.textInput, { color: '#333', }]}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>


                        <View>
                            <View style={{marginTop:20}} >
                                <Text >Email address</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
                                <Image
                                    source={icons.email}
                                    resizeMode="contain"
                                    style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                                />
                                <TextInput
                                    placeholder="enter your Username"
                                    placeholderTextColor={COLORS.gray}
                                    style={[styles.textInput, { color: '#333', }]}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text >Password</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
                                <Image
                                    source={icons.lock}
                                    resizeMode="contain"
                                    style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                                />
                                <TextInput
                                    placeholder="Enter the password"
                                    placeholderTextColor={COLORS.gray}
                                    secureTextEntry={true}
                                    style={[styles.textInput, { color: '#333', }]}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ marginBottom: 10 }} >
                                <Text >Confirm Password</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
                                <Image
                                    source={icons.lock}
                                    resizeMode="contain"
                                    style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                                />
                                <TextInput
                                    placeholder="Enter the password"
                                    placeholderTextColor={COLORS.gray}
                                    secureTextEntry={true}
                                    style={[styles.textInput, { color: '#333', }]}
                                    autoCapitalize="none"

                                />
                            </View>
                        </View>


                     
                        {/* button */}

                        <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', marginTop: 30 }}
                            onPress={() => { navigation.navigate('Tabs') }}
                        >
                            <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#2a8457', width: "90%", height: 45, borderRadius: 10 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>SIGN UP</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

               

                {/* create accout */}
                <View style={{ height:100, justifyContent:'flex-end', alignItems:'center', padding:SIZES.padding, }}>

                    <Text>By signing up you agree to our terms of Use  </Text>
                   
                </View>

            </View>
        )
    }



    return (
        <View


            style={{ flex: 1, width:SIZES.width, height:SIZES.height, backgroundColor: '#fff' }}
        >

            {renderHeader()}

        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({



    inputContainer: {

        padding: SIZES.padding,


    },
    textInput: {
        width: '80%',
        marginTop: Platform.OS === 'ios' ? 0 : 12,
        padding: SIZES.padding,

        marginTop: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 150,
        height: 60,
        borderRadius: 10,
        marginLeft: 10,


    }
})

