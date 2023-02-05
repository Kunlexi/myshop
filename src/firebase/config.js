import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCd_-tqUbY427xLoHIpD70X-4Dp8swUSOw",
  authDomain: "eshop-bc64e.firebaseapp.com",
  projectId: "eshop-bc64e",
  storageBucket: "eshop-bc64e.appspot.com",
  messagingSenderId: "303792946101",
  appId: "1:303792946101:web:739007fc26736d701777fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
