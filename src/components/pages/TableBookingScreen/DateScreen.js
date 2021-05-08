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

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const DateScreen = ({ navigation }) => {

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
                         
                            width: 45
                        }}>
                        <Image
                            source={icons.p11}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, }}

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
                        <Image source={icons.profile} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 30 }} />
                        <Text style={{}}>-</Text>

                    </View>

                </View>


            </View>
        )
    }

    function renderCalender() {
        return (
            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Book a Table</Text>
                </View>
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{


                        height: 350
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#000000',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#349665',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#349665',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        
                        arrowColor: 'green',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: '#000000',

                        indicatorColor: 'blue',

                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 14,
                        textMonthFontSize: 14,
                        textDayHeaderFontSize: 14,

                    }}

                    markedDates={{
                        '2018-03-28': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2018-03-29': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}
                />
            </View>
        )
    }


    function renderButton() {
        return (
            <View
                style={{
                    
                    padding:SIZES.padding

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
                        onPress={() => { navigation.navigate("TimeScreen")}}
                    >
                        <Text style={{color:COLORS.white, fontWeight:'bold' }}>CONTINUE</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderBookingDetails()}
            {renderCalender()}
            {renderButton()}
        </View>
    )
}

export default DateScreen

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
