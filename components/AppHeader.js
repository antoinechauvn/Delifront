import React from 'react';
import { View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
import { useCartContext } from '../utils/CartContext';

const AppHeader = ({ title, navigation }) => {
  const {cart} = useCartContext();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      
      <Appbar.Action icon="home" onPress={() => {navigation.navigate('Home')}} />
      <View>
        <Appbar.Action icon="cart" onPress={() => {navigation.navigate('Panier')}} />
        {cart.length > 0 && <Badge size={16} style={{ position: 'absolute', top: 5, right: 5 }}>
          {cart.length}
        </Badge>}
      </View>
      <Appbar.Action icon="logout" onPress={() => {navigation.navigate('Login')}} />
    </Appbar.Header>
  );
};

export default AppHeader;
