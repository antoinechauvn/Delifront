import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

export default function ItemArticle({ article, onPress }) {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={article.urlImage} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.label}>
          <Text style={styles.articleTitle}>{article.titre}</Text>
          <Text style={styles.articlePrice}>{article.prix} €</Text>
          <Text style={styles.articleDesc}>{article.description}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  card: {
    flexDirection: 'row',  
    borderRadius: 10,
    backgroundColor: '#f8f8f8',  
    overflow: 'hidden',
    marginBottom: 10,  
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    flex: 1,
    padding: 10, 
  },
  articleTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginBottom: 5,  
  },
  articleDesc: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,  
  },
  articlePrice: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    marginBottom: 5,  
  },
});
