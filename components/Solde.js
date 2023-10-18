// Composant Solde.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Solde({ solde }) {
    return (
        <Text style={styles.text}>Solde restant : {solde} €</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        fontSize: 16,
    },
});


export default Solde;
