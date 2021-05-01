
import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList, 
    Animated,
    TextInput
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

const FoodsScreen = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Noodles",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            
            name: "Chicken",
            icon: icons.noodle,
        },
        
        {
            id: 3,
            name: "Pasta",
            icon: icons.salad,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.hamburger,
        },
        
        {
            id: 5,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 6,
            name: "Desserts",
            icon: icons.donut,
        },
       

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Masala Chicken",
            rating: 4.8,
            categories: [2, 1],
            priceRating: affordable,
            photo: images.plate1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.plate2,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    rating: 4.8,
                    calories: 200,
                    duration: "40 min",
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.plate4,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    rating: 4.6,
                    calories: 250,
                    duration: "20 min",
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.plate5,
                    description: "Crispy Baked French Fries",
                    rating: 4.3,
                    calories: 194,
                    duration: "10 min",
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Chicken sukka",
            rating: 4.9,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.plate2,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.plate5,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    rating: 4.9,
                    calories: 250,
                    duration: "50 min",
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.plate6,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    rating: 4.9,
                    calories: 250,
                    duration: "30 min",
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.plate1,
                    description: "Pasta with fresh tomatoes",
                    rating: 4.7,
                    calories: 100,
                    duration: "10 min",
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.plate2,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    rating: 4.5,
                    calories: 100,
                    duration: "20 min",
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Tubular Pasta  ",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.plate3,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.plate4,
                    description: "Fresh tomatoes, all beef hot dogs",
                    rating: 4.7,
                    calories: 100,
                    duration: "20 min",
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: " Sushi",
            rating: 4.3,
            categories: [5],
            priceRating: expensive,
            photo: images.plate4,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.plate6,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    rating: 4.4,
                    calories: 100,
                    duration: "40 min",
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Noodles Cuisine",
            rating: 4.5,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.plate5,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.plate2,
                    description: "Noodles with char siu",
                    rating: 4.9,
                    calories: 200,
                    duration: "10 min",
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.plate3,
                    description: "Vermicelli noodles, cooked prawns",
                    rating: 4.1,
                    calories: 300,
                    duration: "20 min",
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.plate4,
                    description: "A traditional Malay rice dish",
                    rating: 4.5,
                    calories: 300,
                    duration: "30 min",
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.plate5,
                    description: "A traditional Indian rice dish with mutton",
                    rating: 4.8,
                    calories: 300,
                    duration: "10 min",
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "Dessets",
            rating: 4.9,
            categories: [6,2],
            priceRating: affordable,
            photo: images.plate6,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.plate6,
                    description: "Three Layer Teh C Peng",
                    rating: 4.4,
                    calories: 100,
                    duration: "20 min",
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.plate1,
                    description: "Shaved Ice with red beans",
                    rating: 4.7,
                    calories: 100,
                    duration: "10 min",
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.plate2,
                    description: "Layer cakes",
                    rating: 4.6,
                    calories: 300,
                    duration: "40 min",
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (

            <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
                    <TouchableOpacity
                        onPress={() => { navigation.openDrawer() }}
                    >
                        <Image
                            source={icons.sidebar}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, tintColor: '#000000' }}

                        />
                    </TouchableOpacity>

                </Animated.View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 25, }}>Grab your</Text>
                    <Text style={{ color: '#000000', fontSize: 25, ...FONTS.h1, fontWeight: 'bold' }}>Delicious meal !</Text>
                </View>

                {/* search */}

                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 20 }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        width: "100%",
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
                            placeholder="Search your fav food"
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
                </View>


            </View>
        )
    }

    function renderMainCatagories() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 40,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >

                    <Text
                        style={{
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }



        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text>Main Catagories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <View
            style={{ padding: SIZES.padding, }}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("ItemScreen", { item }) }}
                style={{
                    backgroundColor: '#fff',
                    width: 140,
                    height: 200,
                    borderRadius: 10,
                    ...styles.shadow
                }}>
                <Image
                    source={item.photo}
                    resizeMode="stretch"
                    style={{ width: 140, height: 100, borderRadius: 10 }}
                />
                <View style={{  }}>
                    <View style={{ padding: 10, justifyContent:'center', alignItems:'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                        
                        <View style={{ flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={icons.star} resizeMode='contain' style={{ width: 12, height: 12 }} />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Text>{item.rating}</Text>
                                
                            </View>
                            
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center',  }}>
                        <Text>{item.duration}</Text>
                        <Text></Text>
                        </View>
                        
                    </View>

                    
                </View>

            </TouchableOpacity>
       
        </View>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                horizontal={false}
                numColumns={2}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCatagories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

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

export default FoodsScreen;