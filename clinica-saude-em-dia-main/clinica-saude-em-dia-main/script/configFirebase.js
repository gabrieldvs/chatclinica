import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_IHLeFiDAF7s6Plv0PApMPYDBavZdDxk",
  authDomain: "chat-clinica-6be59.firebaseapp.com",
  projectId: "chat-clinica-6be59",
  storageBucket: "chat-clinica-6be59.appspot.com",
  messagingSenderId: "573063385609",
  appId: "1:573063385609:web:4f4a85cb7fcdd4fedaded8",
  measurementId: "G-J7CRKNM8HQ"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  set,
  ref,
  push,
  onChildAdded,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
  signOut,
};
