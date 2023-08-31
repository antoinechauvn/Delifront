import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, 
    ScrollView } from 'react-native';

const listePanier = ['pizza', 'pasta', 'salade', 'dessert', 'boisson', 'pizza', 'pasta', 'salade', 'dessert', 'boisson'];

const Panier = () => {
    return (
        <View style={styles.panierBox}>
            <View style={styles.scrollBox}>
                <ScrollView>
                    {listePanier.map(r => <Text>{r}</Text>)}
                </ScrollView>
            </View>
            <Text>Sous-total : 0€</Text>
            <Button title="Valier" ></Button>
        </View>
    );
};
const styles = new StyleSheet.create({
  panierBox: {
    backgroundColor: 'white',
    width: "31%",
    height: "31%",
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 20,
    borderRadius: 20,
  },
  scrollBox: {
    height: '150px',
    marginBottom: 20,
  }
});
export default Panier;