import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    //apiKey: 'AIzaSyAHd99Ud80-AACb222vVMY-aWANkjky1aY',
    authDomain: 'ice-cream-react-69e3f.firebaseapp.com',
    projectId: 'ice-cream-react-69e3f',
    storageBucket: 'ice-cream-react-69e3f.appspot.com',
    //messagingSenderId: '618619648177',
    //appId: '1:618619648177:web:8a1b14c746b874718c4a90',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
