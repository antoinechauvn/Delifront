import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, 
    ScrollView, Dimensions } from 'react-native';
import AppHeader from '../components/AppHeader';

const listePanier = ['pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson'];
const panierJSON = [{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":'../assets/pizza1.png'},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":'../assets/pizza1.png'}]
const hauteur = Dimensions.get('window').height;
console.log(hauteur);
export default function Panier({ navigation }) {
    return (
      <View>
        <AppHeader title="Panier" navigation={navigation} />
          <View style={styles.panierBox}>
              <View style={styles.scrollBox}>
                  <ScrollView>
                      {panierJSON.map(r => {
                      <View>
                        <Text>{r.titre}</Text>
                        <Text>{r.prix}</Text>
                        <Text>{r.categorie}</Text>
                        <Text>{r.description}</Text>
                        <Text>{r.description}</Text>
                        <Image style={styles.productImage} source={require(r.urlImage)}/>
                      </View>
                      })}
                  </ScrollView>
              </View>
              <View style={styles.footer}>
                <Text>Sous-total : 0€</Text>
                <Button title="Valider" ></Button>
              </View>
          </View>
      </View>
    );
};
const styles = new StyleSheet.create({
  panierBox: {
    display:'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: hauteur/1.09,
    padding: 20,
  },
  scrollBox: {
    height: hauteur*0.79,
  },
  footer: {
  },
  productImage : {
    width:50,
    height:50
  }
});