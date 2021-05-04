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

import MapView, { Marker } from 'react-native-maps';

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

const BookTableScreen = ({ navigation, route }) => {

    const [restaurant, setRestaurant] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;

        setRestaurant(item)

    }, [restaurant])



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

    function renderRestaurant() {
        return (
            <View >
                <View style={{ padding: SIZES.padding * 2, marginLeft: 20 }} >
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>{restaurant.name}</Text>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: '70%' }}>
                            <Text>Breakfast, soup, Pasta</Text>
                            <Text>international - $$</Text>
                        </View>
                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={icons.star} resizeMode='contain' style={{ width: 20, height: 20 }} />
                                <Text style={{ fontSize: 30 }}>4.8 </Text>
                            </View>
                            <Text>36 Views</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderMap() {
        return (
            <View style={{ height: 150, marginTop: 10 }}>
                <MapView style={{ height: 150, borderRadius: 50, }}
                    initialRegion={{
                        latitude: 11.059821,
                        longitude: 78.387451,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                ></MapView>
            </View>
        )
    }

    function renderDetails() {
        return(
            <View  style={{ padding: SIZES.padding * 2, marginLeft: 20 }} >
             <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5 , }}>
                    <Text style={{fontSize:15, color:COLORS.black}}>Item Total</Text>
                    <Text style={{ fontWeight:'700',fontSize:15,}}>$47 - $75</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5}}>
                <Text style={{fontSize:15, color:COLORS.black}}>Hours</Text>
                <Text style={{ fontWeight:'700',fontSize:15,}}>Open - 7AM - 5PM</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5}}>
                <Text style={{fontSize:15, color:COLORS.black}}>Phone</Text>
                <Text style={{ fontWeight:'700',fontSize:15, color:'#4db07f'}}>(+41) 7578757878</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between',padding:5}}>
                <Text style={{fontSize:15, color:COLORS.black, }}>Near by</Text>
                <Text style={{ fontWeight:'bold',fontSize:15,color:'#4db07f'}}>M2 Union Squre</Text>
                </View>

            </View>
        )
    }


    function renderNearby() {

        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{ padding: SIZES.padding, }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("HotelDetails", { item }) }}
                        style={{
                            backgroundColor: '#fff',
                            width: 140,
                            height: 170,
                            borderRadius: 10,
                            ...styles.shadow
                        }}>
                        <Image
                            source={item.photo}
                            resizeMode="stretch"
                            style={{ width: 140, height: 100, borderRadius: 30 }}
                        />
                        <View style={{ width: "100%", flexDirection: 'row' }}>
                            <View style={{ padding: 5, }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                                
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                        <Text>{item.rating}</Text>
                                    </View>
                                </View>
                            </View>

                            
                        </View>

                    </TouchableOpacity>
                    
                </View>

            )
        }





        return (
            <SafeAreaView style={{}}>
            <View style={{ flexDirection:'row', padding:SIZES.padding2, justifyContent:'space-between',}}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize:23}}>Nearby</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize:17, color:'#349665'}}>View all</Text>
                </View>
            </View>
                <FlatList
                    data={data}
                    keyExtractor={item => `${item.id}`}
                    horizontal={true}

                    // contentContainerStyle= {{ }}
                    renderItem={renderItem}
                />

            </SafeAreaView>
        )
    }


    function renderButton() {
        return (
            <View
                style={{
                    marginTop: -100,
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
                        onPress={() => { navigation.navigate("DateScreen")}}
                    >
                        <Text style={{color:COLORS.white, fontWeight:'bold' }}>BOOK A TABLE</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        )
    }



    if (restaurant) {
        return (
            <View style={styles.container}>

                <ImageBackground
                    source={restaurant.photo}
                    imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                    style={{ height:200, width: '100%' }}>
                    {renderHeader()}
                </ImageBackground>

                <ScrollView style={{ flex: 3, backgroundColor: '#fff', width: '100%' }}>
                    {renderRestaurant()}
                    {renderMap()}
                    {renderDetails()}
                    {renderNearby()}
                </ScrollView>

                <View>
                {renderButton()}
                </View>


            </View>
        )
    } else {
        return (<></>)
    }
}

export default BookTableScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
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
        elevation: 1,
    }
})
