// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};*/
const firebaseConfig = {
  apiKey: "AIzaSyAy6eEK6r__75skpreMiu1dRVRd-z6Sct4",
  authDomain: "courier-service-31387.firebaseapp.com",
  projectId: "courier-service-31387",
  storageBucket: "courier-service-31387.firebasestorage.app",
  messagingSenderId: "634131687240",
  appId: "1:634131687240:web:619e9b30430f042bdff57d",
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
