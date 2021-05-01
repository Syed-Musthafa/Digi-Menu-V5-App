

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
    Modal
} from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

import Animated from 'react-native-reanimated';




const HomeScreen = ({ navigation, style }) => {

    


    const [defaultRading, setDefaultRading] = React.useState(2)
    const [maxRading, setMaxRading] = React.useState([1, 2, 3, 4, 5])

    const [model, setModel] = React.useState(false)

    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }, style]}>
                    <TouchableOpacity
                        onPress={() => { navigation.openDrawer() }}
                    >
                        <Image
                            source={icons.sidebar}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, tintColor: '#000000' }}

                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={icons.homebar}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: '#000000' }}

                        />
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFF",

                    borderRadius: 12,
                    marginHorizontal: 20,

                    ...styles.shadow
                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Image
                            source={icons.search}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                    <TextInput
                        placeholder="Search Restaurant!"
                        placeholderTextColor="#345c74"
                        style={{

                            fontSize: 12,
                            width: 280,
                            paddingHorizontal: 12
                        }}
                    />
                    <View style={{ marginLeft: -30 }}>
                        <Image
                            source={icons.ballbar}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', padding: SIZES.padding2 * 2 }}>

                    <Text style={{ color: '#000000', fontSize: 28, }}><Text style={{ fontWeight: 'bold' }}>Discover</Text> new </Text>
                    <Text style={{ color: '#000000', fontSize: 28, }}>tasting experiences</Text>
                </View>
            </View>
        )
    }

    function renderCategoriesList() {

        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{ padding: SIZES.padding, }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("FoodsScreen", { item }) }}
                        style={{
                            backgroundColor: '#fff',
                            width: 260,
                            height: 300,
                            borderRadius: 10,
                            ...styles.shadow
                        }}>
                        <Image
                            source={item.photo}
                            resizeMode="stretch"
                            style={{ width: 260, height: 200, borderRadius: 30 }}
                        />
                        <View style={{ width: "100%", flexDirection: 'row' }}>
                            <View style={{ padding: 5, }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', padding: 1 }}>
                                    <Image
                                        source={icons.pin}
                                        resizeMode="contain"
                                        style={{ width: 10, height: 10, }}
                                    />
                                    <Text style={{ fontSize: 12, marginTop: -5, padding: 2 }}>{item.location}</Text>

                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
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
                    <View style={{ marginTop:100}}></View>
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

    return (
        <View style={styles.container}>

            <View style={{ width: '100%', }}>
                {renderHeader()}
                {renderRestaurant()}
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', width: '100%', }}

            >
                {renderCategoriesList()}
                {renderNearby()}
               
            </ScrollView>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.width,
        height: SIZES.height,

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

