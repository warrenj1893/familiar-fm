import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5p9fyMissr6bpW3tHk3XnSOeKAhrQGaQ",
  authDomain: "familiar-fm.firebaseapp.com",
  projectId: "familiar-fm",
  storageBucket: "familiar-fm.firebasestorage.app",
  messagingSenderId: "984520189721",
  appId: "1:984520189721:web:45119bb7db5a012c3c0788"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
