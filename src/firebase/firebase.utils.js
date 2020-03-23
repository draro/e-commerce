import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyA1LIwTBR73ppR7loxuV1bMIfUrmJP_h10",
    authDomain: "e-commerce-db-f3f04.firebaseapp.com",
    databaseURL: "https://e-commerce-db-f3f04.firebaseio.com",
    projectId: "e-commerce-db-f3f04",
    storageBucket: "e-commerce-db-f3f04.appspot.com",
    messagingSenderId: "1043539153431",
    appId: "1:1043539153431:web:f10007b61552e2f1878252"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase