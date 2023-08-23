import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVYmkdxAaQb1BvaCEeTa9gVFNbRmifnZw",
  authDomain: "react-netflix-clone-f0c2d.firebaseapp.com",
  projectId: "react-netflix-clone-f0c2d",
  storageBucket: "react-netflix-clone-f0c2d.appspot.com",
  messagingSenderId: "567788776448",
  appId: "1:567788776448:web:281cf60f44b79390befce5",
  measurementId: "G-8MMK2EZ88D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
