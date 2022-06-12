import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx0BdCKQ9mY4tcVU74rDSbAp9JTaXGTBI",
  authDomain: "tasty-eats-bc9d5.firebaseapp.com",
  projectId: "tasty-eats-bc9d5",
  storageBucket: "tasty-eats-bc9d5.appspot.com",
  messagingSenderId: "1065177451328",
  appId: "1:1065177451328:web:ea12ed81d507855c9d48a5"
};

export const app = initializeApp(firebaseConfig);
export const storage  = getStorage(app);