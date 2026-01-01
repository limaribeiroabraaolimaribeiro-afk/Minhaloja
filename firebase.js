<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  updateDoc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy-zUh5M2KiXvWGfXL17onsOtpzGZXf8Y",
  authDomain: "chiquinho-admin-248b6.firebaseapp.com",
  projectId: "chiquinho-admin-248b6",
  storageBucket: "chiquinho-admin-248b6.firebasestorage.app",
  messagingSenderId: "177897723264",
  appId: "1:177897723264:web:f59f2f0e0f456c9bbd5d65"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  query,
  orderBy
};
</script>
