import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemCategory from '../components/ItemCategory';
import { entreeImage, platImage, dessertImage, soupeImage, fromageImage } from '../utils/ImageLoader'
import products from '../utils/ProductsData';

export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchedArticles, setSearchedArticles] = React.useState(products);
    const onChangeSearch = query => setSearchQuery(query);
    const categoryImages = [entreeImage, platImage, dessertImage, soupeImage, fromageImage];
    const categories = ["Entrée", "Plat", "Dessert", "Soupe", "Fromage"];
    const articlesData = products;

    React.useEffect(() => {
        const searchedArticles = products.filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchedArticles(searchedArticles);
    }, [searchQuery]);

    return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
        <AppHeader title="TestHome" navigation={navigation} />
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        {/* Contenu principal */}
        <ScrollView>
            {/* Liste des catégories */}
            <View style={{paddingBottom: 50}}>
            {categories.map((category, index) => (
                <ItemCategory
                key={index}
                title={category}
                imagepath={categoryImages[index]}
                onPress={() => {
                    const filteredArticles = articlesData.filter(article => article.category === category); 
                    navigation.navigate('Articles', filteredArticles);
                }}
                ></ItemCategory>
            ))}
            </View>
        </ScrollView>
    </View>
    );
}