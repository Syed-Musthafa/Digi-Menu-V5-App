
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, StatusBar, ScrollView, FlatList, ImageBackground } from 'react-native'

import ToggleSwitch from 'toggle-switch-react-native'
import { useIsFocused } from '@react-navigation/native';
// import * as Animatable from 'react-native-animatable';

import { COLORS, icons, images, SIZES, FONTS, restaurantData } from '../../exports'



const OrderDeliveryScreen = ({ navigation, route }) => {

    const isFocused = useIsFocused();

    const [restaurant, setRestaurant] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);

    React.useEffect(() => {
        let { item } = route.params;

        setRestaurant(item)

    }, [restaurant]);


    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    function getOrderQty(menuId) {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    // function getBasketItemCount() {
    //     let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

    //     return itemCount
    // }

    function sumOrder() {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }

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
                        }}
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image source={icons.arrow_Left} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                            padding: SIZES.padding,
                            borderRadius: 50,
                            backgroundColor: "#dddddd4D",
                            marginRight: 20,
                            marginTop: 25,
                            width: 45
                        }} >

                        <Image source={icons.heart_icon} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    function renderContent() {
        return (
            <View>




                <View style={{ justifyContent: 'center', alignItems: 'center', }}>

                    {/* image */}
                    <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: -125 }}>
                        <Image source={images.sideplate1} resizeMode="cover" style={{ width: 250, height: 170 }} />
                    </View>



                    <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{restaurant.name}</Text>

                    </View>

                    {/* calories */}


                    <View style={{ width: "100%" }}>
                        <View style={{ flexDirection: 'row', padding: SIZES.padding * 3, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: 'row', padding: 5, }}>
                                <Image source={icons.clock} resizeMode='contain' style={{ width: 20, height: 20, tintColor: '#28dc82' }} />
                                <Text style={{ marginLeft: 5 }}>{restaurant.duration}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 5, }}>
                                <Image source={icons.star1} resizeMode='contain' style={{ width: 20, height: 20 }} />
                                <Text style={{ marginLeft: 5 }}>{restaurant.rating}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 5, }}>
                                <Image source={icons.fire} resizeMode='contain' style={{ width: 20, height: 20 }} />
                                <Text style={{ marginLeft: 5 }}>{restaurant.calories.toFixed(2)} kcal</Text>
                            </View>
                        </View>
                    </View>



                    {/* Quantity */}

                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            width: 200,
                            height: 40,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            borderRadius: 20
                        }}
                    >
                        <View
                            style={{
                                width: 60,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25
                            }}
                        >
                            <Text>{sumOrder()} $</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: '#FBC401',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25
                            }}
                            onPress={() => editOrder("-", restaurant.menuId, restaurant.price)}
                        >
                            <Text style={{ ...FONTS.body1 }}>-</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: 50,
                                backgroundColor: '#FBC401',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                ...FONTS.h4,
                                color: COLORS.black,
                                backgroundColor: COLORS.white,
                                borderRadius: 40,
                                width: 30,
                                height: 30,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                marginTop: 1
                            }}
                            >
                                {getOrderQty(restaurant.menuId)}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                width: 50,
                                backgroundColor: '#FBC401',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopRightRadius: 25,
                                borderBottomRightRadius: 25
                            }}
                            onPress={() => editOrder("+", restaurant.menuId, restaurant.price)}
                        >
                            <Text style={{ ...FONTS.body2 }}>+</Text>
                        </TouchableOpacity>


                    </View>


                </View>

            </View>
        )
    }


    function renderIngradient() {

        const renderItem = ({ item }) => {
            return (
                <View
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}

                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </View>
            )
        }



        return (
            <View style={{ padding: SIZES.padding, marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ingradients</Text>

                <FlatList
                    data={restaurantData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }


    function renderButton() {
        return (
            <View
                style={{
                    marginTop: 20


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
                            width: "80%",
                            height: 50,
                            padding: SIZES.padding,
                            backgroundColor: "#FBC401",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20
                        }}
                        onPress={() => { navigation.navigate("CheckOutScreen")}}
                    >
                        <Text>Order Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "20%",
                            height: 50,
                            padding: SIZES.padding,
                            backgroundColor: '#FBC401',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            marginLeft: 10,
                        }}
                    >
                        <Image source={icons.bell} resizeMode="contain" style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    if (restaurant) {
        return (
            <View style={styles.container}>
                { isFocused && <StatusBar backgroundColor='#FBC401' barStyle="light-content" />}
                <ImageBackground
                    source={images.bg1}
                    imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                    style={{ flex: 1, width: '100%' }}>
                    {renderHeader()}
                </ImageBackground>
                <View

                    style={{ flex: 3, borderTopRightRadius: 50, borderTopLeftRadius: 50, backgroundColor: '#F5F2EE', padding: SIZES.padding * 3 }}>
                    {renderContent()}
                    {renderIngradient()}
                    {renderButton()}
                </View>
            </View>
        )
    } else {
        return (<></>)
    }

}

export default OrderDeliveryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBC401'
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

