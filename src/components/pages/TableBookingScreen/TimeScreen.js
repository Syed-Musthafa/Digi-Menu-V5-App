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



const TimeScreen = ({ navigation }) => {

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

    const [selectedLunch, setSelectedLunch] = React.useState(null)
    const [selectedDinner, setSelectedDinner] = React.useState(null)

    function onSelectLunch(Lunch) {
         setSelectedLunch(Lunch);
        
    }

    function onSelectDinner(dinner) {
        setSelectedDinner(dinner);
       
   }


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
                        <Image source={icons.profile} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 30 }} />
                        <Text style={{}}>-</Text>

                    </View>

                </View>


            </View>
        )
    }

    function renderTime() {
        return (
            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Book a Table</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, }}>Lunch</Text>
                    <ScrollView
                    horizontal
                    contentContainerStyle={{ padding:SIZES.padding * 2, }}
                    >
                    {
                        lunch.map((item, index) => (
                            <TouchableOpacity
                            key={index}
                            style={{
                                marginLeft:10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: SIZES.padding,
                                borderRadius: 50,
                                backgroundColor: (selectedLunch?.id == item.id) ? COLORS.secondary : COLORS.lightGray3,
                                width: 70,
                                marginTop: 10,
                                
                            }}
                            onPress={() => onSelectLunch(item)}
                            >
                                <Text style={{
                                    color:(selectedLunch?.id == item.id) ? COLORS.white : COLORS.black,
                                }}>{item.number}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    </ScrollView>

                </View>
            </View>
        )
    }

    function renderDinner() {

        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{ padding: 7, justifyContent:'center', alignItems:'center' }}>
                    <TouchableOpacity
                            
                            style={{
                                
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                borderRadius: 50,
                                backgroundColor: (selectedDinner?.id == item.id) ? COLORS.secondary : COLORS.lightGray3,
                                width: 70,
                                marginTop: 10,
                                
                            }}
                            onPress={() => onSelectDinner(item)}
                            >
                                <Text style={{
                                    color:(selectedDinner?.id == item.id) ? COLORS.white : COLORS.black,
                                }}>{item.number}</Text>
                            </TouchableOpacity>
                   
                </View>

            )
        }





        return (
            <SafeAreaView style={{}}>
            <View style={{ padding:SIZES.padding, justifyContent:'space-between',}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize:23}}>Dinner</Text>
                </View>
                
            </View>
            <FlatList
                data={Dinner}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                horizontal={false}
                numColumns={4}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding ,
                    paddingBottom: 30
                }}
            />

            </SafeAreaView>
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
                        onPress={() => { navigation.navigate("MembersScreen") }}
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
            {renderTime()}
            {renderDinner()}
            {renderButton()}
        </View>
    )
}

export default TimeScreen

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

