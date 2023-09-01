import React from 'react';
import { View, Text, Button, ImageBackground, Dimensions, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Plat from '../components/Plat';

export default function Home({ navigation }) {
    const panierJSON = [{"id":5555, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/pates.jpg")},{"id":5575, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6597, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6594, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6592, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6584, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6369, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")},{"id":6367, "titre":'pizza',"prix":10,"categorie":'gras',"description":'la pizza dela mama',"allergène":["gluten"],"urlImage":require("../assets/plats/boeufb.jpeg")}];
    const hauteur = Dimensions.get('window').height;
    return (
        <View style={{ flex: 1 }}>
            <AppHeader title="Home" navigation={navigation} />

            {/* Contenu principal */}
            <View style={{ flex: 1 }}>

                {/* Liste de restaurants */}
                <View style={{ display:'flex', justifyContent: 'space-between', flexDirection: 'column', height: hauteur/1.09, padding: 20, }}>
                    <ScrollView>
                        {panierJSON.map(r => 
                            <Plat key={r.id} titre={r.titre} prix={r.prix} description={r.description} urlImage={r.urlImage} />
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}