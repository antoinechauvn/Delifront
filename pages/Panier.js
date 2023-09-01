import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppHeader from '../components/AppHeader';
import ItemArticle from '../components/ItemArticle';

const listePanier = ['pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson'];
const panierJSON = [{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/pates.jpg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")}];
const prixTotal = panierJSON.reduce((total, plat) => total + plat.prix, 0);
const hauteur = Dimensions.get('window').height;
console.log(hauteur);

export default function Panier({ navigation }) {
    return (
      <View>
        <AppHeader title="Panier" navigation={navigation} />
          <View style={styles.panierBox}>
              <View style={styles.scrollBox}>
                  <Text style={{fontSize:25,marginBottom:10}}>Voici votre panier: </Text>
                  <ScrollView>
                      {panierJSON.map(r => 
                        <ItemArticle title="Oeuf Mimosa" imagepath={require('../assets/entrees/oeuf.png')} onPress={() => { navigation.navigate('Articles');}}></ItemArticle>
                      )}
                  </ScrollView>
              </View>
              <View style={styles.footer}>
                <Text>Sous-total : {prixTotal}€</Text>
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