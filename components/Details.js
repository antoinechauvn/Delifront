import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button} from 'react-native';
import {  useFonts, Montserrat_700Bold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import CustomButton from './CustomButton';
import { useCartContext } from '../utils/CartContext';
import AppHeader from '../components/AppHeader';
import products from '../utils/ProductsData';
import { useState } from 'react';


export default function Details({ navigation, route }) {
  const { index } = route.params;
  const { addToCart } = useCartContext();
  const { removeFromCart } = useCartContext();

  const [quantity, setQuantity] = useState(0); // État local pour la quantité

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    addToCart(product);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product.id);
    }
  };
  
  const product = products[index];


  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
          {product.title}
          </Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>{product.price} €</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Categorie</Text>
              <Text style={styles.infoItemText}>{product.category}</Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Description</Text>
              <Text style={styles.infoItemText}>{product.description}</Text>
            </View>


            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Allergène</Text>
              <Text style={styles.infoItemText}>{product.allergens.join(', ')}</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/plats/pizza1.png')} style={styles.itemPicture} />
          </View>
        </View>
        <View>
          {quantity == 0 && <CustomButton title='Acheter' onPress={() => { addToCart(product); handleIncrement(); }} style={styles.buyButton}>
          </CustomButton>}
          {quantity > 0 && <View style={styles.rowContainer}>
              <Button title='-' style={styles.editButton} onPress={() => handleDecrement()}></Button>
              <Text>{quantity}</Text>
              <Button title='+' style={styles.editButton} onPress={() => handleIncrement()}></Button>
            </View>
            }
        </View>
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
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    cursor: 'pointer',
    margin: 5,
  }
}
)

