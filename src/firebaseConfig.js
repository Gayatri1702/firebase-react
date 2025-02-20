// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAYJRr0Cb6Xir2utT-BrcsygjC1W5JG81k",
    authDomain: "reactfirebase-33151.firebaseapp.com",
    databaseURL: "https://reactfirebase-33151-default-rtdb.firebaseio.com",
    projectId: "reactfirebase-33151",
    storageBucket: "reactfirebase-33151.firebasestorage.app",
    messagingSenderId: "126230227554",
    appId: "1:126230227554:web:4d9da1f4cff914fb447f3b",
    measurementId: "G-QBEVWT0V89"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // ✅ Export Realtime Database
