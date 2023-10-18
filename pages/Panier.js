import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppHeader from '../components/AppHeader';
import ItemArticle from '../components/ItemArticle';
import { useCartContext } from '../utils/CartContext';
import { getProducts } from '../utils/Api';

const hauteur = Dimensions.get('window').height;

export default function Panier({ navigation }) {
  const articlesData = getProducts();
  const { cart, addToCart, removeFromCart } = useCartContext();

  const getUniqueProducts = () => {
    return Array.from(new Set(cart.map(article => article.id))).map(id =>
      cart.find(article => article.id === id)
    );
  };
  const getProductQuantities = () => {
    return cart.reduce((quantities, article) => {
      quantities[article.id] = (quantities[article.id] || 0) + 1;
      return quantities;
    }, {});
  };
  const quantities = getProductQuantities(); // Assurez-vous de déclarer 'quantities' avec 'const'

  // Calcul du sous-total
  const calculateSubtotal = (article) => {
    const subtotal = article.prix*quantities[article.id];
    return subtotal;
  };

  return (
    <View>
      <AppHeader title="Panier" navigation={navigation} />
      <View style={styles.panierBox}>
        <View style={styles.scrollBox}>
          <Text style={{ fontSize: 25, marginBottom: 10 }}>Voici votre panier: </Text>
          <ScrollView>
            {getUniqueProducts().map((article, key) =>
              <View key={key}>
                <ItemArticle article={article} description={article.description} urlImage={article.urlImage} />
                <Text>Sous-total : {calculateSubtotal(article)}</Text>
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Sous-total : AH €</Text>
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
    height: hauteur*1.09,
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