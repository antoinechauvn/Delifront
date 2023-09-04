import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppHeader from '../components/AppHeader';
import ItemArticle from '../components/ItemArticle';
import { useCartContext } from '../utils/CartContext';

const listePanier = ['pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson'];
const panierJSON = [{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/pates.jpg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":"5555", "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")}];
const prixTotal = panierJSON.reduce((total, plat) => total + plat.prix, 0);
const hauteur = Dimensions.get('window').height;
console.log(hauteur);

export default function Panier({ navigation }) {
  const { cart, addToCart, removeFromCart } = useCartContext();
  const productCounts = cart.reduce((counts, product) => {
      const key = product;
      if (!counts[key]) {
          counts[key] = 0;
      }
      counts[key]++;
      return counts;
  }, {});
  const uniqueProducts = Array.from(new Set(cart.map(product => product.id))).map(id => cart.find(product => product.id === id));
  const productQuantities = cart.reduce((quantities, product) => {
    quantities[product.id] = (quantities[product.id] || 0) + 1;
    return quantities;
}, {});
    return (
      <View>
        <AppHeader title="Panier" navigation={navigation} />
          <View style={styles.panierBox}>
              <View style={styles.scrollBox}>
                  <Text style={{fontSize:25,marginBottom:10}}>Voici votre panier: </Text>
                  <ScrollView>
                      {uniqueProducts.map((product) => 
                      <ItemArticle article={product} prix={productQuantities[product.id]*product.prix} description={product.description} urlImage={require("../assets/plats/pates.jpg")} quantiti={productQuantities[product.id]} />
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