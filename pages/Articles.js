import React from 'react';
import { View,ScrollView, SafeAreaView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemArticle from '../components/ItemArticle';
import products from '../utils/ProductsData';

export default function Articles({ navigation, route }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchedArticles, setSearchedArticles] = React.useState(products);
    
    const articlesData = products;
    console.log(route.params);
    const filteredArticles = route.params;
    onChangeSearch = query => setSearchQuery(query);

    const handleSearchSubmit = () => {
        // Filtrer les articles lorsque l'utilisateur appuie sur "Entrée"
        const searchedArticles = articlesData.filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchedArticles(searchedArticles);
        navigation.navigate('Articles', searchedArticles)
      };
    

    return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
        <AppHeader title="Articles" navigation={navigation} />
        <Searchbar placeholder="Rechercher des plats" onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={handleSearchSubmit}/>
        {/* Contenu principal */}
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 20, paddingBottom: 50}}>
            {filteredArticles.map((article) => (
            <ItemArticle
              key={article.id} // Assurez-vous d'utiliser une clé unique pour chaque élément
              article={article}
              imagepath={article.imagepath}
              onPress={() => {
                console.log(article)
                navigation.navigate('Details', { index: article.id });
              }}
            ></ItemArticle>
          ))}
            </View>
        </ScrollView>
    </View>
    );
}