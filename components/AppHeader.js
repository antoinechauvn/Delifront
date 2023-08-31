import React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = ({ title, navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="home" onPress={() => {}} />
      <Appbar.Action icon="cart" onPress={() => {}} />
      <Appbar.Action icon="logout" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppHeader;
