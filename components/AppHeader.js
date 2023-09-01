import React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = ({ title, navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      
      <Appbar.Action icon="home" onPress={() => {navigation.navigate('Home')}} />
      <Appbar.Action icon="cart" onPress={() => {navigation.navigate('Panier')}} />
      <Appbar.Action icon="logout" onPress={() => {navigation.navigate('Login')}} />
    </Appbar.Header>
  );
};

export default AppHeader;
