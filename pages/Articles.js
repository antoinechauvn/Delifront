import React from 'react';
import { View,ScrollView, SafeAreaView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Searchbar } from 'react-native-paper';
import ItemArticle from '../components/ItemArticle';

export default function Articles({ navigation }) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
        <AppHeader title="Articles" navigation={navigation} />
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        {/* Contenu principal */}
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 20, paddingBottom: 50}}>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
            </View>
        </ScrollView>
    </View>
    );
}