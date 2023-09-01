import React from 'react';
import { Text, StyleSheet, Pressable, View, ImageBackground } from 'react-native';
import { useFonts, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const Plat = ({titre,prix,description,urlImage}) => {
    let [fontsLoaded] = useFonts({
      Montserrat_500Medium,
      Montserrat_700Bold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
                    <View style={styles.box}>
                        <View>
                          <ImageBackground source={urlImage} style={styles.boxPlat}>
                          </ImageBackground>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',paddingLeft:'5px',paddingRight:'5px',paddingTop:'5px'}}>
                          <Text style={styles.textTop}>Plat: {titre} </Text>
                          <Text style={[styles.textTop,{position: 'fixed',right:0}]}>Prix: {prix}€ </Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row',paddingLeft:'5px',paddingRight:'5px'}}>
                          <Text style={styles.text}>Description: {description}</Text>
                        </View>
                    </View>
    );
};
const styles = new StyleSheet.create({
    boxPlat: {
      padding: 50,
      borderRadius: 10,
      flexGrow: 1,
      resizeMode: 'cover',
      overflow: 'hidden',
    },
    box: {
      display:'flex',
      flexDirection:'column',
      borderRadius: 10,
      marginBottom: 10,
      flexGrow: 1,
      resizeMode: 'cover',
      overflow: 'hidden',
    },
    text: {
        fontFamily: 'Montserrat_500Medium',
    },
    textTop: {
        fontFamily: 'Montserrat_700Bold',
    },
  });
export default Plat;