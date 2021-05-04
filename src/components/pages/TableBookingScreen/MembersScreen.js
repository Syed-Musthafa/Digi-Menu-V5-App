

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



const MembersScreen = ({ navigation }) => {

    const lunch = [
        {
            id: 1,
            number: "11:30",
        },
        {
            id: 2,
            number: "12:00",
        },

        {
            id: 3,
            number: "12:30",
        },
        {
            id: 4,
            number: "13:00",
        },
    ]

    const Dinner = [
        {
            id: 1,
            number: "17:30",
        },
        {
            id: 2,
            number: "18:00",
        },

        {
            id: 3,
            number: "18:30",
        },
        {
            id: 4,
            number: "19:00",
        },
        {
            id: 5,
            number: "19:30",
        },
        {
            id: 6,
            number: "20:00",
        },
        {
            id: 7,
            number: "20:30",
        },
        {
            id: 8,
            number: "21:00",
        },
    ]

    const [adultCount, setAdultCount] = React.useState(0)
    const [childCount, setChildCount] = React.useState(0)

  


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
                        <Text style={{}}>{adultCount + childCount}</Text>

                    </View>

                </View>


            </View>
        )
    }

    function renderCounting() {
        return (
            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Book a Table</Text>
                </View>

                 {/* Adults */}

                <View style={{ padding: SIZES.padding, marginTop:60 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{fontSize:18}}>Adults</Text>
                    </View>

                   

                    <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity
                            style={{
                                width: 60,
                                height:60,
                                borderWidth:1,
                                borderColor:COLORS.gray,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:50
                            }}
                            onPress={() => { adultCount <= 1 ? setAdultCount(0) : setAdultCount(adultCount - 1) }}
                        >
                            <Text style={{ ...FONTS.h1 }}>-</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: 50,
                                
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                               
                                color: COLORS.primary,
                                backgroundColor: COLORS.white,
                                borderRadius: 40,
                                fontSize:45
                                
                            }}
                            >
                               {adultCount}
                            </Text>
                        </View>

                        <TouchableOpacity
                           style={{
                                width: 60,
                                height:60,
                                borderWidth:1,
                                borderColor:COLORS.gray,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:50
                            }}
                            onPress={() => { setAdultCount(adultCount + 1) }}
                        >
                            <Text style={{ ...FONTS.body2 }}>+</Text>
                        </TouchableOpacity>
                    </View>

                   
                </View>

                 {/* Children */}
                 
                 <View style={{ padding: SIZES.padding, marginTop:30, marginBottom:30  }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{fontSize:18}}>Children</Text>
                    </View>

                   

                    <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity
                            style={{
                                width: 60,
                                height:60,
                                borderWidth:1,
                                borderColor:COLORS.gray,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:50
                            }}
                            onPress={() => { childCount <= 1 ? setChildCount(0) : setChildCount(childCount - 1) }} 
                        >
                            <Text style={{ ...FONTS.h1 }}>-</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: 100,
                                
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                
                                color: COLORS.primary,
                                backgroundColor: COLORS.white,
                                borderRadius: 40,
                                fontSize:45
                                
                            }}
                            >
                              {childCount}
                            </Text>
                        </View>

                        <TouchableOpacity
                           style={{
                                width: 60,
                                height:60,
                                borderWidth:1,
                                borderColor:COLORS.gray,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:50
                            }}
                            onPress={() => { setChildCount(childCount + 1) }}
                        >
                            <Text style={{ ...FONTS.body2 }}>+</Text>
                        </TouchableOpacity>
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
                        onPress={() => { navigation.navigate("InformationScreen") }}
                    >
                        <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>CONTINUE</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderBookingDetails()}
            {renderCounting()}

            {renderButton()}
        </View>
    )
}

export default MembersScreen

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


