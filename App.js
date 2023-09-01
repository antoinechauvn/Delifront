import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import LoginScreen from './pages/Login';
import Details from './components/Details';
import Panier from './pages/Panier';
import CloneHome from './pages/Home';
import Articles from './pages/Articles';
import {CartProvider} from './utils/CartContext';


const Stack = createNativeStackNavigator();
let PRODUCTSLIST; // Mise en cache des produits

console.log('==========================')
console.log('MISE EN CACHE DES PRODUITS')
console.log('==========================')

axios.get('http://localhost:8080/demo/produits')
  .then(response => {
    // Vous pouvez accéder aux données JSON directement ici
    PRODUCTSLIST = response.data;
    // Faites ce que vous voulez avec les données JSON
    console.log('Données JSON :', PRODUCTSLIST);
  })

  console.log(PRODUCTSLIST);

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="CloneHome" component={CloneHome} options={{ headerShown: false }}/>
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Articles" component={Articles} options={{ headerShown: false }}/>
          <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;