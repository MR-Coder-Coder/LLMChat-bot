// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOdM8pDH1KPcmwKWOD6YjM-2QkKKph_q4",
    authDomain: "llmchat-bot.firebaseapp.com",
    projectId: "llmchat-bot",
    storageBucket: "llmchat-bot.appspot.com",
    messagingSenderId: "731195531300",
    appId: "1:731195531300:web:555f97294f7a1d0156f8b1",
    measurementId: "G-LLR3HGQ9EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export all initialized services for use in other files
export { app, auth, db };
