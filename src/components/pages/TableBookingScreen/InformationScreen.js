import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Modal,
    Animated
} from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'



const InformationScreen = ({ navigation }) => {





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

    function renderBookingDetails() {
        return (
            <View>
                <View style={{ padding: SIZES.padding * 2, }} >
                    <Text style={{ fontSize: 30 }}>Al-Qareeb</Text>
                </View>
                <View style={{ width: '100%', height: 70, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', ...styles.shadow }}>
                    <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'center', alignItems: 'center' }}>

                        <Image source={icons.schedule} resizeMode="contain" style={{ width: 50, height: 50 }} />
                        <Text style={{ marginLeft: 20 }}>-</Text>

                    </View>
                    <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 0.6, height: 30, marginRight: 20 }}></View>
                        <Image source={icons.clock} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 20 }} />
                        <Text style={{ marginLeft: 20 }}>-</Text>

                    </View>
                    <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 0.6, height: 30, marginRight: 20 }}></View>
                        <Image source={icons.profile} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 20 }} />
                        <Text style={{}}>-</Text>

                    </View>

                </View>


            </View>
        )
    }

    function renderInformation() {
        return (
            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Information</Text>
                </View>

                <View style={{ padding: SIZES.padding * 2, }}>
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
                                style={[styles.textInput, { color: '#333', marginLeft: 5 }]}
                                autoCapitalize="none"

                            />
                        </View>
                    </View>

                    <View>
                        <View style={{ marginTop: 20 }} >
                            <Text >Email address</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginTop: 10 }}>
                            <Image
                                source={icons.email}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                            />
                            <TextInput
                                placeholder="enter your Username"
                                placeholderTextColor={COLORS.gray}
                                style={[styles.textInput, { color: '#333', marginLeft: 5 }]}
                                autoCapitalize="none"

                            />
                        </View>
                    </View>

                    <View>
                        <View style={{ marginTop: 20 }} >
                            <Text >Phone Number </Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginTop: 10 }}>
                            <Image
                                source={icons.phone1}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#000000' }}
                            />
                            <TextInput
                                placeholder="enter your Username"
                                placeholderTextColor={COLORS.gray}
                                style={[styles.textInput, { color: '#333', marginLeft: 5 }]}
                                autoCapitalize="none"

                            />
                        </View>
                    </View>


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
                            width: "90%",
                            height: 50,
                            padding: SIZES.padding,
                            backgroundColor: "#349665",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => { navigation.navigate("ConfirmedScreen") }}
                    >
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>CONFIRM BOOKING</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                {renderHeader()}
                {renderBookingDetails()}
            </View>
            <View style={{ flex: 2.4 }}>
                {renderInformation()}

                {renderButton()}
            </View>
        </View>
    )
}

export default InformationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,


        backgroundColor: '#fff',


    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    }
})



