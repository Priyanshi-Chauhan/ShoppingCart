import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxBoGKJ-NHadkRm40GLGYYCOUW3hXpugw",
  authDomain: "shopping-cart-7c7de.firebaseapp.com",
  projectId: "shopping-cart-7c7de",
  storageBucket: "shopping-cart-7c7de.appspot.com",
  messagingSenderId: "914824907013",
  appId: "1:914824907013:web:44adb2500009d690894f6c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
