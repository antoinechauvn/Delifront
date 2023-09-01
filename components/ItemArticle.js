import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function ItemArticle({ title, imagepath, onPress }) {
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
        <View style={styles.overlay}>
          <Text style={styles.articleText}>{title}</Text>
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
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
  },
});
