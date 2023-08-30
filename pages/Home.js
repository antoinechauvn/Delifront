import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button title="Se Connecter"
          onPress={() => navigation.navigate('Login')}/>
        </View>
      );
}
