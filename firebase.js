const firebaseConfig = {
  apiKey: "AIzaSyCy-zUh5M2KiXvWGfXL17onsOtpzGZXf8Y",
  authDomain: "chiquinho-admin-248b6.firebaseapp.com",
  projectId: "chiquinho-admin-248b6",
  storageBucket: "chiquinho-admin-248b6.firebasestorage.app",
  messagingSenderId: "177897723264",
  appId: "1:177897723264:web:f59f2f0e0f456c9bbd5d65"
};

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG DO SEU PROJETO (cole o seu aqui)
const firebaseConfig = {
  apiKey: "AIzaSyCy-zUh5M2KiXvWGfXL17onsOtpzGZXf8Y",
  authDomain: "chiquinho-admin-248b6.firebaseapp.com",
  projectId: "chiquinho-admin-248b6",
  storageBucket: "chiquinho-admin-248b6.firebasestorage.app",
  messagingSenderId: "177897723264",
  appId: "1:177897723264:web:f59f2f0e0f456c9bbd5d65"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Banco de dados
export const db = getFirestore(app);
export { collection, getDocs };
