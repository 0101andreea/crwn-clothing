import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBvlC4pxyTzqxUhAV9hcXYCuelnp3yrBQ0",
    authDomain: "crwn-db-b9dd8.firebaseapp.com",
    projectId: "crwn-db-b9dd8",
    storageBucket: "crwn-db-b9dd8.appspot.com",
    messagingSenderId: "571886922149",
    appId: "1:571886922149:web:1f740f9597b90c2181a04c",
    measurementId: "G-6V6ELX407H"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get()

      //create snapshot - represents the data
    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error)
        }

    }
    return userRef

  }
  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  const providerF = new firebase.auth.FacebookAuthProvider()
  //always trigger the Google popup when we use the google auth provider
  provider.setCustomParameters({prompt : 'select_account'})
  providerF.setCustomParameters({prompt : 'select account'})
  // signInWithPopup takes the provide class that we made from diffrent types of popups, in our case from Google
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export const signInWithFacebook = () => auth.signInWithPopup(providerF)
  export default firebase