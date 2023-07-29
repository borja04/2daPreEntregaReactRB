
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsrPpPL8G79KsoeFNi6dQsNUzOborvO-s",
  authDomain: "proyectofinal-b6d4e.firebaseapp.com",
  projectId: "proyectofinal-b6d4e",
  storageBucket: "proyectofinal-b6d4e.appspot.com",
  messagingSenderId: "417706736365",
  appId: "1:417706736365:web:cc2cfe19ff45bbae906ae4",
  measurementId: "G-3X6PQFRQ5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export  const db = getFirestore(app);