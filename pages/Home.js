import React from 'react';
import { View, Text, Button } from 'react-native';
import AppHeader from '../components/AppHeader';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
          <AppHeader title="Home Screen" navigation={navigation} />

            {/* Contenu principal */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Se Connecter" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
}
