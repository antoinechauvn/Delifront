import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemCategory from '../components/ItemCategory';

export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const categories = ["Entree","Plat","Dessert","Soupe","Fromage"];

    return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
        <AppHeader title="TestHome" navigation={navigation} />
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        {/* Contenu principal */}
        <View style={{ flex: 1 }}>
            {/* Liste des catégories */}
            <View>
                <ItemCategory title={categories[0]} imagepath={require('../assets/categories/entree.jpg')} onPress={() => { navigation.navigate('Articles');}}></ItemCategory>
                <ItemCategory title={categories[1]} imagepath={require('../assets/categories/plat.jpg')} onPress={(title) => { alert("Catégorie "+categories[1]+" cliquée !");}}></ItemCategory>
                <ItemCategory title={categories[2]} imagepath={require('../assets/categories/dessert.png')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
                <ItemCategory title={categories[3]} imagepath={require('../assets/categories/soupe.jpg')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
                <ItemCategory title={categories[4]} imagepath={require('../assets/categories/fromage.jpg')} onPress={() => { alert('Catégorie cliquée !');}}></ItemCategory>
            </View>
        </View>
    </View>
    );
}