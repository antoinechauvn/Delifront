import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function Details({ navigation }) {
    return (
        <View style={styles.container}>
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <View style={styles.headerLeft}>
                
              </View>

            </View>

          </SafeAreaView>
        </View>
      );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  }
}

)

