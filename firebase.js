// 🔥 Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 CONFIGURAÇÃO DO SEU FIREBASE
// 👉 PEGA ISSO NO FIREBASE > Configurações > SDK da Web
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// 🚀 Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Auth (login)
export const auth = getAuth(app);

// 📦 Firestore (banco)
export const db = getFirestore(app);
