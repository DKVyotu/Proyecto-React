import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCsH3EJpNPz_n2LdP9-C0HFaQ492MqvsoM",
  authDomain: "productoselmocho.firebaseapp.com",
  projectId: "productoselmocho",
  storageBucket: "productoselmocho.appspot.com",
  messagingSenderId: "976306509881",
  appId: "1:976306509881:web:017b840b8d0ee30dcc15e8"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db