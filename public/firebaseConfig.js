import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCcVGnf9yHmmlJuOmLxN08zEJlIeCYqsFg",
  authDomain: "followdot-27974.firebaseapp.com",
  projectId: "followdot-27974",
  storageBucket: "followdot-27974.firebasestorage.app",
  messagingSenderId: "966632075887",
  appId: "1:966632075887:web:08cc3444d9d9b3c5bd539a"
};

export function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  return { db, auth };
}