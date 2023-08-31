import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-web';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function Home({ navigation }) {
    let [fontsLoaded] = useFonts({
      Montserrat_500Medium,
      Montserrat_700Bold,
    });
    const image = { uri: "https://img.freepik.com/photos-premium/ensemble-plats-table-pierre-noire-nourriture-vue-dessus-espace-libre-pour-votre-texte_187166-51390.jpg?w=2000" };
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <ImageBackground source={image} style={styles.backgroundImage} blurRadius={5}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.box}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <Text style={styles.inputTitre}>Email</Text>
              <View style={styles.inputView}>
                <TextInput style={styles.inputText}></TextInput>
              </View>
              <Text style={styles.inputTitre}>Mot de passe</Text>
              <View style={styles.inputView}>
                <TextInput secureTextEntry={true} style={styles.inputText}></TextInput>
              </View>
              <Button title="Se Connecter" color="red" style={styles.buttonPress}
              onPress={() => navigation.goBack()}/>
          </View>
        </View>
      </ImageBackground>
      );
}
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 90.5,
    marginBottom: 40,
  },
  box: { 
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    opacity: 0.8,
   },
   backgroundImage: {
    width: "100%",
    height: "100%",
   },
  inputText: {
    height: 50,
    borderRadius: 30,
    width: "100%",
    flex: 1,
    padding: 20,
    fontSize: 18,
    fontFamily: 'Montserrat_500Medium',
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  inputTitre: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: 'Montserrat_500Medium',
  },
 });