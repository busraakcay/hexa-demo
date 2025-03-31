// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// should be taken from env file, env integration was not done because of its a case study
const firebaseConfig = {
  apiKey: "AIzaSyDOQiETcSjKW4oICnIsidVj6uwrMOaXmsU",
  authDomain: "hexa-ai-demo.firebaseapp.com",
  projectId: "hexa-ai-demo",
  storageBucket: "hexa-ai-demo.firebasestorage.app",
  messagingSenderId: "997007873536",
  appId: "1:997007873536:web:beaa3444122350c757eae5",
  measurementId: "G-JTY4NKQ3SL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
