import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';
import ItemCategory from '../components/ItemCategory';

export default function Home({ navigation }) {
    return (
    <View style={{ flex: 1 }}>
        <AppHeader title="TestHome" navigation={navigation} />
        {/* Contenu principal */}
        <View style={{ flex: 1 }}>
            {/* Liste de restaurants */}
            <View style={{ marginTop: 20 }}>
                <ItemCategory title="Entrée" imagepath={require('../assets/categories/entree.jpg')}></ItemCategory>
                <ItemCategory title="Plats" imagepath={require('../assets/categories/plat.jpg')}></ItemCategory>
                <ItemCategory title="Desserts" imagepath={require('../assets/categories/dessert.png')}></ItemCategory>
                <ItemCategory title="Soupes" imagepath={require('../assets/categories/soupe.jpg')}></ItemCategory>
                <ItemCategory title="Fromage" imagepath={require('../assets/categories/fromage.jpg')}></ItemCategory>
            </View>
        </View>
    </View>
    );
}