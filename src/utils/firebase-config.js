import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyOZiczISbupfldLXL94oCH1ixQ0TxyUw",
  authDomain: "react-netflix-clone-13eab.firebaseapp.com",
  projectId: "react-netflix-clone-13eab",
  storageBucket: "react-netflix-clone-13eab.appspot.com",
  messagingSenderId: "932320256479",
  appId: "1:932320256479:web:ce245df95f0e075e0d646a",
  measurementId: "G-W8T8RFVWD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)