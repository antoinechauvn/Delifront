import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import LoginScreen from './pages/Login';
import Details from './components/Details';
import Panier from './pages/Panier';
import CloneHome from './pages/Home';
import Articles from './pages/Articles';
import {CartProvider} from './utils/CartContext';


const Stack = createNativeStackNavigator();

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