// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD-2VCVfkP0CdpgTrvzqJGfg8p__uv4VGU",
  authDomain: "builder-97420.firebaseapp.com",
  projectId: "builder-97420",
  storageBucket: "builder-97420.appspot.com",
  messagingSenderId: "245660674432",
  appId: "1:245660674432:web:2f117a85db689bf4ecf965",
  measurementId: "G-JWRFJGX3SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const realtimeDatabase = getDatabase(app);
