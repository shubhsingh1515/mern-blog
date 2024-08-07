
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-26c37.firebaseapp.com",
  projectId: "mern-blog-26c37",
  storageBucket: "mern-blog-26c37.appspot.com",
  messagingSenderId: "1026247630083",
  appId: "1:1026247630083:web:a69a15ed18e5d9f2075d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };