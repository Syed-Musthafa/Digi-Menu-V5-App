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

const LoginScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View>
                <View style={{}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, }} >
                        <Image source={images.tableBooking} resizeMode='contain' style={{ width: 100, height: 100, borderRadius: 20 }} />
                    </View>
                    <View style={{ padding: SIZES.padding, width: '90%', justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 30, color: COLORS.black, marginTop: 10 }}>Find and <Text style={{fontWeight:'bold'}}>book</Text> the best <Text style={{fontWeight:'bold'}}>restaurants</Text></Text>
                    </View>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                    <View style={styles.inputContainer}>
                        <View>
                            <View style={{ marginBottom: 10 }} >
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


                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, padding: 10, color: '#000000' }}>Forget your password ? </Text>
                        </View>

                        {/* button */}

                        <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', marginTop: 10 }}
                            onPress={() => { navigation.navigate('Tabs') }}
                        >
                            <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#2a8457', width: "90%", height: 45, borderRadius: 10 }}>
                                <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>LOGIN</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                {/* Line */}

                <View style={{ width: "100%", flexDirection: 'row', padding: SIZES.padding * 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderTopWidth: 1, width: 130 }}></View>
                    <Text style={{ marginLeft: 10, marginRight: 10 }}>OR</Text>
                    <View style={{ borderTopWidth: 1, width: 130 }}></View>
                </View>

                {/* Google */}

                <View style={{ marginRight:40}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Image source={images.google} resizeMode="contain" style={{ width:70, height:70}} />
                         <Text>Continue with Google</Text>
                    </View>
                </View>

                {/* create accout */}
                <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center', padding:SIZES.padding}}>
                    <Text>Not a member yet ? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                        <Text style={{ color:'#45e394', fontWeight:'bold'}}>Create account</Text>
                    </TouchableOpacity>
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

export default LoginScreen

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

