// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrYvRwI9cJxtS6g6rn0N0EuNFTZaL9Z2k",
  authDomain: "digit-2022.firebaseapp.com",
  projectId: "digit-2022",
  storageBucket: "digit-2022.appspot.com",
  messagingSenderId: "410264992144",
  appId: "1:410264992144:web:6d6be2cb48784456909b15",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
