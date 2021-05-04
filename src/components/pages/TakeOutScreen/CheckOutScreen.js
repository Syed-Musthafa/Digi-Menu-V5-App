import React, { useState} from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

const CheckOutScreen = ({navigation}) => {

    const [count, setCount] = useState(1)

    function renderHeader() {
        return (
            <View style={{ width: '100%', }}>
                <View style={{ flexDirection: 'row', }}>
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
                        <Image source={icons.arrow_Left} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20, tintColor: COLORS.black }} />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            padding: SIZES.padding,
                            marginLeft: 70,
                            marginTop: 25,

                        }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cart Food</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurantList() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 10 }}
                style={{ padding: SIZES.padding, }}>



                <View

                    // onPress={() => { navigation.navigate("OrderDeliveryScreen", { item }) }}
                    style={{
                        backgroundColor: '#fff',
                        marginTop: 20,
                        width: "100%",
                        height: 300,
                        borderRadius: 10,
                        ...styles.shadow
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image
                                source={images.plate4}
                                resizeMode="stretch"
                                style={{ width: 140, height: 120, borderRadius: 20 }}
                            />
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ padding: 10, }}>
                                <View style={{ width: '55%' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Chicken masala</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                        <Text>4.8</Text>

                                    </View>

                                </View>
                                <View style={{ marginTop: 10, flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold' }}>100 SAR</Text>
                                    
                                        {/* Quantity */}
                                        <View style={{ flexDirection: 'row', marginLeft: 30, justifyContent: 'center', alignItems: 'center', }}>
                                            <TouchableOpacity
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderTopLeftRadius: 25,
                                                    borderBottomLeftRadius: 25
                                                }}
                                                onPress={() => { count <= 1 ? setCount(0) : setCount(count - 1) }}
                                            // onPress={() => editOrder("-", restaurant.menuId, restaurant.price)}
                                            >
                                                <Text style={{ ...FONTS.body1, marginTop: -5 }}>-</Text>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Text style={{
                                                    ...FONTS.h4,
                                                    fontSize:13,
                                                    color: COLORS.black,
                                                    backgroundColor: COLORS.white,
                                                    borderRadius: 40,
                                                    width: 20,
                                                    height: 20,
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    marginTop: 1
                                                }}
                                                >
                                                   {count}
                                                {/* {getOrderQty(restaurant.menuId)} */}
                                                </Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderTopRightRadius: 25,
                                                    borderBottomRightRadius: 25
                                                }}
                                                onPress={() => { setCount(count + 1) }}
                                            // onPress={() => editOrder("+", restaurant.menuId, restaurant.price)}
                                            >
                                                <Text style={{ ...FONTS.body2, marginTop: -4 }}>+</Text>
                                            </TouchableOpacity>

                                        </View>
                                </View>

                            </View>


                        </View>

                    </View>



                    {/* line */}

                    <View style={{ width: "100%", flexDirection: 'row', padding: SIZES.padding * 2, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderTopWidth: 1, width: 300 }}></View>

                    </View>

                    {/* second cart list */}

                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image
                                    source={images.plate1}
                                    resizeMode="stretch"
                                    style={{ width: 140, height: 120, borderRadius: 20 }}
                                />
                            </View>

                            <View style={{}}>
                                <View style={{ padding: 10, }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Chicken masala</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                            <Text>4.8</Text>

                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', }}>
                                        <Text style={{ fontWeight: 'bold' }}>100 SAR</Text>

                                        {/* Quantity */}
                                        <View style={{ flexDirection: 'row', marginLeft: 30, justifyContent: 'center', alignItems: 'center', }}>
                                            <TouchableOpacity
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderTopLeftRadius: 25,
                                                    borderBottomLeftRadius: 25
                                                }}
                                                onPress={() => { count <= 1 ? setCount(0) : setCount(count - 1) }}
                                            // onPress={() => editOrder("-", restaurant.menuId, restaurant.price)}
                                            >
                                                <Text style={{ ...FONTS.body1, marginTop: -5 }}>-</Text>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Text style={{
                                                    ...FONTS.h4,
                                                    fontSize:13,
                                                    color: COLORS.black,
                                                    backgroundColor: COLORS.white,
                                                    borderRadius: 40,
                                                    width: 20,
                                                    height: 20,
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    marginTop: 1
                                                }}
                                                >
                                                   {count}
                                                {/* {getOrderQty(restaurant.menuId)} */}
                                                </Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: '#FBC401',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderTopRightRadius: 25,
                                                    borderBottomRightRadius: 25
                                                }}
                                                onPress={() => { setCount(count + 1) }}
                                            // onPress={() => editOrder("+", restaurant.menuId, restaurant.price)}
                                            >
                                                <Text style={{ ...FONTS.body2, marginTop: -4 }}>+</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                      </View>


                   
                </View>





            </ScrollView>

        )
    }


    function renderDeliveryTotal() {
        return(
            <View style={{ padding:SIZES.padding * 2}}>
                <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5 , }}>
                    <Text style={{fontSize:17, color:COLORS.gray}}>Item Total</Text>
                    <Text style={{ fontWeight:'bold',fontSize:17,}}>$47.00</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5}}>
                <Text style={{fontSize:17, color:COLORS.gray}}>Delivery Charge</Text>
                <Text style={{ fontWeight:'bold',fontSize:17,}}>$1.00</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between', padding:5}}>
                <Text style={{fontSize:17, color:COLORS.gray}}>Tax</Text>
                <Text style={{ fontWeight:'bold',fontSize:17,}}>$1.50</Text>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-between',padding:5}}>
                <Text style={{fontSize:25, color:COLORS.black, fontWeight:'bold'}}>Total</Text>
                <Text style={{ fontWeight:'bold',fontSize:25,}}>$49.50</Text>
                </View>
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
                        // onPress={() => { navigation.navigate("CheckOutScreen")}}
                    >
                        <Text>Checkout</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        )
    }


    return (
        <View>
            {renderHeader()}
            {renderRestaurantList()}
            {renderDeliveryTotal()}
            {renderButton()}
        </View>
    )
}

export default CheckOutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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
