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
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef
};



// export const addCollectionAndDocuments = async ( collectionKey,objectsToAdd ) => {
//     const collectionRef = firestore.collection(collectionKey);
  
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//       const newDocRef = collectionRef.doc();
//       console.log(newDocRef)
//       batch.set(newDocRef, obj);
//     });
  
//     return await batch.commit();
//   };


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase