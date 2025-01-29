import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    apiKey: "AIzaSyC-hHxDUAhuuICIC6sViMc2AtKUu9mvq1k",
    authDomain: "mapas-collections-web.firebaseapp.com",
    projectId: "mapas-collections-web",
    storageBucket: "mapas-collections-web.firebasestorage.app",
    messagingSenderId: "124777654649",
    appId: "1:124777654649:web:0567a3aafac8ef8346e7a8",
    measurementId: "G-GX3G6PNX4B"

};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
