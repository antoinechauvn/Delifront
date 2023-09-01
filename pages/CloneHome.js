import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemCategory from '../components/ItemCategory';

export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
        <AppHeader title="TestHome" navigation={navigation} />
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        {/* Contenu principal */}
        <View style={{ flex: 1 }}>
            {/* Liste des catégories */}
            <View>
                <ItemCategory title="Entrée" imagepath={require('../assets/categories/entree.jpg')} onPress={() => { navigation.navigate('Articles');}}></ItemCategory>
                <ItemCategory title="Plats" imagepath={require('../assets/categories/plat.jpg')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
                <ItemCategory title="Desserts" imagepath={require('../assets/categories/dessert.png')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
                <ItemCategory title="Soupes" imagepath={require('../assets/categories/soupe.jpg')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
                <ItemCategory title="Fromage" imagepath={require('../assets/categories/fromage.jpg')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
            </View>
        </View>
    </View>
    );
}