import React from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

const ItemScreen = ({ navigation, route }) => {

    const [restaurant, setRestaurant] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;

        setRestaurant(item)

    })


    function renderHeader() {
        return (

            <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            padding: SIZES.padding,
                            borderRadius: 50,
                            backgroundColor: "#dddddd4D",


                            width: 45
                        }}
                        onPress={() => {navigation.goBack()}}
                         >
                        <Image source={icons.arrow_Left} resizeMode='contain' style={{ width: 20, height: 20, borderRadius: 20, tintColor: COLORS.black }} />
                    </TouchableOpacity>

                </Animated.View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 25, }}>Grab your</Text>
                    <Text style={{ color: '#000000', fontSize: 25, ...FONTS.h1, fontWeight: 'bold' }}>Delicious meal !</Text>
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

                {
                    restaurant?.menu.map((item, index) => (

                        <TouchableOpacity
                            key={`menu-${index}`}
                            onPress={() => { navigation.navigate("OrderDeliveryScreen", { item }) }}
                            style={{
                                backgroundColor: '#fff',
                                marginTop: 20,
                                width: "100%",
                                height: 120,
                                borderRadius: 10,
                                ...styles.shadow
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image
                                        source={item.photo}
                                        resizeMode="stretch"
                                        style={{ width: 140, height: 120, borderRadius: 20 }}
                                    />
                                </View>
                                <View style={{width: '100%'}}>
                                    <View style={{ padding: 10, }}>
                                        <View style={{ width: '55%' }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop:10}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                                <Text>{item.rating}</Text>

                                            </View>

                                        </View>
                                        <View style={{ marginTop:10, }}>
                                            <Text style={{ fontWeight:'bold'}}>{item.price} SAR</Text>
                                            <Text></Text>
                                        </View>

                                    </View>


                                </View>

                            </View>

                        </TouchableOpacity>
                    ))
                }

                <View style={{ marginTop: 50 }} />

            </ScrollView>



        )
    }



    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderRestaurantList()}
        </View>
    )
}

export default ItemScreen

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
        elevation: 5,
    }
})
