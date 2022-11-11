import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0WgvuWE5IUV5ujRS5r7Fi6H8-i3gjcFg",
  authDomain: "elteam-39f99.firebaseapp.com",
  databaseURL: "https://elteam-39f99-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "elteam-39f99",
  storageBucket: "elteam-39f99.appspot.com",
  messagingSenderId: "558267650881",
  appId: "1:558267650881:web:6cc4afa477ec078e9f87c0",
  measurementId: "G-HK6F6P9TR1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);