import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';

export default function Home({ navigation }) {
    const restaurants = [
        { name: 'Plat 1', description: 'Description du plat 1', image: require('../assets/plats/pates.jpg') },
        { name: 'Plat 2', description: 'Description du plat 2', image: require('../assets/plats/boeufb.jpeg') },
        { name: 'Plat 3', description: 'Description du plat 3', image: require('../assets/plats/hamburger.jpeg') },
        { name: 'Plat 4', description: 'Description du plat 4', image: require('../assets/plats/chilicon.jpeg') },
        { name: 'Plat 5', description: 'Description du plat 5', image: require('../assets/plats/crepe.png') },
        { name: 'Plat 6', description: 'Description du plat 6', image: require('../assets/plats/blanquette.png') },
        { name: 'Plat 6', description: 'Description du plat 6', image: require('../assets/plats/blanquette.png') },
        { name: 'Plat 6', description: 'Description du plat 6', image: require('../assets/plats/blanquette.png') },
        { name: 'Plat 6', description: 'Description du plat 6', image: require('../assets/plats/blanquette.png') },
        { name: 'Plat 6', description: 'Description du plat 6', image: require('../assets/plats/blanquette.png') },
        // Ajoutez d'autres plats ici
    ];

    return (
        <View style={{ flex: 1 }}>
            <AppHeader title="Home" navigation={navigation} />

            {/* Contenu principal */}
            <View style={{ flex: 1 }}>

                {/* Liste de restaurants */}
                <View style={{ marginTop: 20 }}>
                    {restaurants.map((restaurant, index) => (
                        <TouchableOpacity key={index} onPress={() => { navigation.navigate('Details');}}>
                            <ImageBackground
                                key={index}
                                source={restaurant.image}
                                blurRadius={3}
                                style={{
                                    backgroundColor: 'lightgrey',
                                    padding: 40,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    marginHorizontal: 15,
                                    flexGrow: 1,
                                    resizeMode: 'cover',
                                    overflow: 'hidden',
                                }}
                                imageStyle={{ opacity: 0.8 }}
                            >
                                <Text>{restaurant.name}</Text>
                                <Text>{restaurant.description}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}