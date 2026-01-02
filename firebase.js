// 🔥 Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 CONFIGURAÇÃO DO SEU FIREBASE
// 👉 PEGA ISSO NO FIREBASE > Configurações > SDK da Web
const firebaseConfig = {
  apiKey: "AIzaSyCy-zUh5M2KiXvWGfXL17onsOtpzGZXf8Y",
  authDomain: "chiquinho-admin-248b6.firebaseapp.com",
  projectId: "chiquinho-admin-248b6",
  storageBucket: "chiquinho-admin-248b6.firebasestorage.app",
  messagingSenderId: "177897723264",
  appId: "1:177897723264:web:f59f2f0e0f456c9bbd5d65"
};

// 🚀 Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Auth (login)
export const auth = getAuth(app);

// 📦 Firestore (banco)
export const db = getFirestore(app);
