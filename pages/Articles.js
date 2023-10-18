import React from 'react';
import { View,ScrollView, SafeAreaView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemArticle from '../components/ItemArticle';
import { getProducts } from '../utils/Api';

export default function Articles({ navigation, route }) {

  const articlesData = getProducts();
  console.log(articles);
  const articles = route.params;

  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchedArticles, setSearchedArticles] = React.useState(articlesData);

  React.useEffect(() => {
    // Filtrer les articles lorsque le texte de recherche change
    const filteredArticles = articlesData.filter((article) =>
      article.titre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedArticles(filteredArticles);
  }, [searchQuery]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    navigation.navigate('Articles', searchedArticles)
  };
    

    return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
        <AppHeader title="Articles" navigation={navigation} />
        <Searchbar placeholder="Rechercher des plats" onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={handleSearchSubmit}/>
        {/* Contenu principal */}
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 20, paddingBottom: 50}}>
            {articles.map((article) => (
            <ItemArticle
              key={article.id} 
              article={article}
              imagepath={article.urlImage}
              onPress={() => {
                navigation.navigate('Details', { article: article });
              }}              
            ></ItemArticle>
          ))}
            </View>
        </ScrollView>
    </View>
    );
}