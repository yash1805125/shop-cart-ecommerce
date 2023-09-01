import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw9yEV2Qv7zuGmEFI-aPVWaIZ3NL0BDww",
  authDomain: "react-auth-1f8a5.firebaseapp.com",
  projectId: "react-auth-1f8a5",
  storageBucket: "react-auth-1f8a5.appspot.com",
  messagingSenderId: "354653589845",
  appId: "1:354653589845:web:92f2eb74cc43bb36465fdc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, app };
