// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHMlTlptzqQeh6awpvO5pdIDbJ-wvzpG8",
    authDomain: "notion-nextjs.firebaseapp.com",
    projectId: "notion-nextjs",
    storageBucket: "notion-nextjs.appspot.com",
    messagingSenderId: "107587395182",
    appId: "1:107587395182:web:21f74e159f6d249c66107f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export { db };
export default app;