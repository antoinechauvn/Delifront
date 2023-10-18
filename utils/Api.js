import { Platform } from 'react-native';

const iosUrl = 'http://192.168.1.64:8080';
const androidUrl = 'http://10.0.2.2:8080';
console.log(Platform.OS);
let url;

if (Platform.OS === 'ios') {
  url = iosUrl;
} else if (Platform.OS === 'android') {
  url = androidUrl;
} else {
  url = 'http://127.0.0.1:8080';
}
console.log(url);
// Variable globale pour stocker les produits
let productsData = [];

// Fonction pour récupérer les produits depuis le backend
async function fetchProducts() {
  try {
    const response = await fetch(url + '/demo/produits');
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des produits');
    }

    productsData = await response.json();
    
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    throw error; // Vous pouvez gérer l'erreur de manière appropriée ici
  }
}

// Chargez les produits une fois au démarrage de l'application
fetchProducts();

// Fonction pour obtenir les produits chargés
function getProducts() {
  return productsData;
}

// Exportez la fonction getProducts() pour qu'elle puisse être utilisée dans d'autres parties de votre application
export { getProducts };