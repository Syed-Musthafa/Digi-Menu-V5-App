import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, ImageBackground } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../exports'


const Dashboard = ({navigation}) => {

    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <TouchableOpacity
                        // onPress={() => { navigation.openDrawer() }}
                    >
                        <Image
                            source={icons.sidebar}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, tintColor: '#000000' }}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={icons.homebar}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: '#000000' }}

                        />
                    </TouchableOpacity>
                </Animated.View>
                <View style={{ marginTop: 50 }}></View>
            </View>
        )
    }

    function renderCard() {
        return (
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity style={styles.card} onPress={ () => { navigation.navigate('ScanQRs')}}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, }}>
                            <Image source={images.qr} resizeMode="contain" style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Scan QR</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.card, { marginTop: 40 }]} onPress={ () => { navigation.navigate('HomeScreen')}}>
                <View style={{ flexDirection: 'row', }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, }}>
                            <Image source={images.takeout} resizeMode="contain" style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Take Out</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.card, { marginTop: 40 }]}
                 onPress={ () => { navigation.navigate('BookHomeScreen')}}
                 >
                <View style={{ flexDirection: 'row', }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, }}>
                            <Image source={images.tableBooking} resizeMode="contain" style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Table Booking</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }








    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderCard()}
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {

        height: 150,
        width: 320,
        borderTopRightRadius: 20,
        borderRadius: 20,
        backgroundColor: '#F7F7F7',


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.47,
        shadowRadius: 12,

        elevation: 2,
    },
})
