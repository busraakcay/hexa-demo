// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase configuration object.
 *
 * ⚠️ This configuration should ideally be stored in an environment variable.
 * Since this is a case study, the values are hardcoded for simplicity.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDOQiETcSjKW4oICnIsidVj6uwrMOaXmsU",
  authDomain: "hexa-ai-demo.firebaseapp.com",
  projectId: "hexa-ai-demo",
  storageBucket: "hexa-ai-demo.firebasestorage.app",
  messagingSenderId: "997007873536",
  appId: "1:997007873536:web:beaa3444122350c757eae5",
  measurementId: "G-JTY4NKQ3SL",
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firestore database instance
export const firestore = getFirestore(app);
