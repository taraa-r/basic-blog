// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB90JJzNBGDEzzk6cODOws6TohkVIPZmag",
    authDomain: "basic-blog-90bd5.firebaseapp.com",
    projectId: "basic-blog-90bd5",
    storageBucket: "basic-blog-90bd5.appspot.com",
    messagingSenderId: "29703021520",
    appId: "1:29703021520:web:892f7c54aeabf44893cfd5"
}

const app = initializeApp({ firebaseConfig });
const db = getFirestore(app);
const auth = getAuth(app);