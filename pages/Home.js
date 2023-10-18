import React , { useContext, useState }from 'react';
import { View, ScrollView, Text, StyleSheet  } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemCategory from '../components/ItemCategory';
import { getProducts } from '../utils/Api';
import { UserContext } from './Context';
import Solde from '../components/ItemCategory';



export default function Home({ navigation }) {

    const { user, setUser } = useContext(UserContext);

    const [searchQuery, setSearchQuery] = React.useState('');
    console.log(getProducts());
    const articlesData = getProducts();
    const [searchedArticles, setSearchedArticles] = React.useState(articlesData);
    const onChangeSearch = query => setSearchQuery(query);
    const [categoriesList, setCategoriesList] = React.useState([]);  
    
    const categories = async () => {
        try {
            const response = await fetch('http://localhost:8080/demo/produits/categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const data = await response.json();
                setCategoriesList(data)
            } else {
              
            }
        } catch (error) {
            console.error('Erreur lors du fetch :', error);
        }
    };


    React.useEffect(() => {
        // Filtrer les articles lorsque le texte de recherche change
        const filteredArticles = articlesData.filter((article) =>
            article.titre.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchedArticles(filteredArticles);
    }, [searchQuery]);

    React.useEffect(() => {
        categories();  
    }, []);  
    

    const handleSearchSubmit = () => {
        navigation.navigate('Articles', searchedArticles)
    };
    

    return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
        <AppHeader title={`Accueil, Bienvenue ${user.prenom}`}  navigation={navigation} />
        <Text style={styles.soldeText}> Solde restant : {user.solde} €</Text>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} onSubmitEditing={handleSearchSubmit}/>
        {/* Contenu principal */}
        <ScrollView style={styles.scrollViewContainer}>
            {/* Liste des catégories */}
            <View style={styles.categoryContainer}>
            
            {categoriesList.map((category, index) => (
                <ItemCategory
                    key={index}
                    title={category}
                    style={styles.categoryItem}  
                    onPress={() => {
                        const filteredArticles = articlesData.filter(article => article.categories === category); 
                        navigation.navigate('Articles', filteredArticles);
                    }}
                ></ItemCategory>
            ))}
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    soldeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        margin: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        textAlign: 'center',
    },
    scrollViewContainer: {
        backgroundColor: '#e6f7ff',  
    },
    categoryContainer: {
        flexDirection: 'column',  
        flexWrap: 'wrap',      
        justifyContent: 'flex-start',  
        paddingHorizontal: 10, 
    },
    categoryItem: {
        width: '45%',
        marginBottom: 10,  
    }
});