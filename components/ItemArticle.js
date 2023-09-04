import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function ItemArticle({ article, imagepath, onPress }) {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rectangle}>
          <Image source={imagepath} style={styles.image} />
        </View>
        {/* Texte pour décrire l'article */}
        <View style={styles.label}>
          <View style={styles.rowContainer}>
            <Text style={styles.articleTitle}>Plat: {article.title}</Text>
            <Text style={styles.articlePrice}>Prix: {article.price} €</Text>
          </View>
          <Text style={styles.articleDesc}>Description: {article.description}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  rectangle: {
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  label: {
    justifyContent: 'left',
    marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row', // Aligner les éléments horizontalement
    alignItems: 'center', // Aligner les éléments verticalement au centre
    justifyContent: 'space-between',
  },
  articleTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
  },
  articleDesc: {
    fontFamily: 'Montserrat_500Medium',
  },
  articlePrice: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
  },
});
