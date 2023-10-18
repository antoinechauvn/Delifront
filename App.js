import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import Details from './components/Details';
import Panier from './pages/Panier';
import HomeScreen from './pages/Home';
import Signin from './pages/Signin';
import Articles from './pages/Articles';
import {CartProvider} from './utils/CartContext';
import { getProducts } from './utils/Api';
import { UserContext } from './pages/Context';


const Stack = createNativeStackNavigator();

const products = getProducts();
console.log(products);

function App() {

  const [user, setUser] = React.useState(null);
  
  return (
    <CartProvider>
      <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Articles" component={Articles} options={{ headerShown: false }}/>
          <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }}/>
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;