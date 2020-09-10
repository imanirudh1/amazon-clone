import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDNFt4SfNvy7ukkWUenK1o0TA8DoNZtUp0",
    authDomain: "e-clone-a0629.firebaseapp.com",
    databaseURL: "https://e-clone-a0629.firebaseio.com",
    projectId: "e-clone-a0629",
    storageBucket: "e-clone-a0629.appspot.com",
    messagingSenderId: "366083042699",
    appId: "1:366083042699:web:721b2208799fd5cc4b138e",
    measurementId: "G-D538DSQ3B4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  export {db,auth};