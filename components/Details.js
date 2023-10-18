import React, { useState, useEffect,useContext  } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, TextInput } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import CustomButton from './CustomButton';
import { useCartContext } from '../utils/CartContext';
import AppHeader from '../components/AppHeader';
import { UserContext } from '../pages/Context';

export default function Details({ route, navigation }) {
  const { article } = route.params;
  const { addToCart, removeFromCart, getQuantityById } = useCartContext();
  const { user, setUser } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(getQuantityById(article.id));
  }, [getQuantityById, article.id]);

  const handleIncrement = () => {
    addToCart(article);
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      removeFromCart(article.id);
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  

  const handleAddToCart = async () => {
    try {
      const response = await fetch(`http://localhost:8080/demo/paniers/ajouterproduit`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            panierId: user.panier.id,
            produitId: article.id,
            quantity:quantity
        }),
      });
      //alert('Article ajouté au panier avec succès !');
    } 
    catch (error) {
      console.error('Erreur lors de l\'ajout de l\'article au panier :', error);
      console.error("produit ID",article.id);
      //alert('Erreur lors de l\'ajout de l\'article au panier');
    }
  };
  

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppHeader title="Details" navigation={navigation} />
        <SafeAreaView>
          <View style={styles.headerWrapper}>

          </View>
        </SafeAreaView>

        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>
          {article.titre}
          </Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>{article.prix} €</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Categorie</Text>
              <Text style={styles.infoItemText}>{article.categories}</Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Description</Text>
              <Text style={styles.infoItemText}>{article.description}</Text>
            </View>


            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Allergènes</Text>
              <Text style={styles.infoItemText}>{article.allergenes}</Text>
            </View>
          </View>
          <View>
            <Image source={article.urlImage} style={styles.itemPicture} />
          </View>
        </View>
        <View style={styles.rowContainer}>
        <Button title='-' onPress={handleDecrement}></Button>
        <TextInput 
          style={styles.quantityInput}
          keyboardType='number-pad'
          value={quantity}
          onChangeText={text => setQuantity(text.replace(/[^0-9]/g, ''))}
        />
        <Button title='+' onPress={handleIncrement}></Button>
      </View>
      <CustomButton title='Ajouter au panier' onPress={handleAddToCart} style={styles.buyButton}/>
    </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 28,
    color: '#343a40',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 26,
    color: '#007bff',
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  infoLeftWrapper: {
    flex: 1,
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
    fontSize: 18,
    color: '#343a40',
  },
  itemPicture: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  quantityInput: {
    width: 50,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 18,
  },
  buyButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
  },
});


