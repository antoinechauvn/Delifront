import React , { useContext, useId, useState }from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { UserContext } from './Context';


export default function Home({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if(!fontsLoaded){
    return null;
  }

    const image = { uri: "https://img.freepik.com/photos-premium/ensemble-plats-table-pierre-noire-nourriture-vue-dessus-espace-libre-pour-votre-texte_187166-51390.jpg?w=2000" };



    const handleLogin = async () => {
      try {
          const response = await fetch('http://localhost:8080/demo/utilisateurs/auth', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: email,
                  password: password,
              }),
          });
  
          if (response.ok) {
              const user = await response.json();
              setUser(user);
              navigation.navigate('Home')
          } else {
            
          }
      } catch (error) {
          console.error('Erreur lors du fetch :', error);
      }
  };

    return (
        <ImageBackground source={image} style={styles.backgroundImage} blurRadius={5}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.box}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
              <Text style={styles.inputTitre}>Email</Text>
              <View style={styles.inputView}>
                <TextInput style={styles.inputText} onChangeText={text => setEmail(text)}></TextInput>
              </View>
              <Text style={styles.inputTitre}>Mot de passe</Text>
              <View style={styles.inputView}>
                <TextInput secureTextEntry={true} onChangeText={text => setPassword(text)} style={styles.inputText}></TextInput>
              </View>
              <Button title="Se Connecter" color="red" style={styles.buttonPress}
              onPress={() => handleLogin()}/>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={{ marginTop: 10, color: 'white', textAlign: 'center' }}>
                <u>Vous n'avez pas de compte ? Créez un compte ici.</u>
                </Text>
              </TouchableOpacity>
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
    borderRadius: 20,
    width: "100%",
    flex: 1,
    padding: 20,
    fontSize: 18,
    fontFamily: 'Montserrat_500Medium',
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 20,
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
