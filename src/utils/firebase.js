// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAb7aW1-Pmw2cgRwGzKPH0kWCl2GrtyEw",
  authDomain: "cineplex-gpt-cce57.firebaseapp.com",
  projectId: "cineplex-gpt-cce57",
  storageBucket: "cineplex-gpt-cce57.firebasestorage.app",
  messagingSenderId: "558189402057",
  appId: "1:558189402057:web:8c4402d8c5a02abb06ba18",
  measurementId: "G-Y7XLPWXBBT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
