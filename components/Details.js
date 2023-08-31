import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import CustomButton from './CustomButton';


export default function Details({ navigation }) {
  const jsonData = [
    {
      "id": 1,
      "titre": "Produit A",
      "prix": 10.99,
      "catégorie": "Alimentation",
      "description": "Un délicieux produit",
      "allergene": ["gluten", "lactose"]
    },
  ];
  const product = jsonData[0];


  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>

          </View>
        </SafeAreaView>

        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>
          {product.titre}
          </Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>{product.prix} €</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Categorie</Text>
              <Text style={styles.infoItemText}>{product.catégorie}</Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Description</Text>
              <Text style={styles.infoItemText}>{product.description}</Text>
            </View>


            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Allergène</Text>
              <Text style={styles.infoItemText}>{product.allergene.join(', ')}</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/pizza1.png')} style={styles.itemPicture} />
          </View>
        </View>
        <CustomButton title='Acheter' onPress={() => console.log('Fonction Ajouter')} style={styles.buyButton}>
        </CustomButton>
      </View>
      );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },

  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 32,
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 32,
    color: "#e28743"
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  infoLeftWrapper: {
    paddingLeft: 20,

  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    color:'#BBB5BD',
  },
  infoItemText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 20,
  },
  itemPicture: {
    marginLeft: 0,
    width: 200, 
    height: 200,
    resizeMode: 'contain',
  },
  buyButton: {
    marginHorizontal: 40
  }
}
)

