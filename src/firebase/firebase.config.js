// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDY-An6qXujNVTysRSDpvQEvQkvvw-ccsA",
//   authDomain: "crud-and-jwt.firebaseapp.com",
//   projectId: "crud-and-jwt",
//   storageBucket: "crud-and-jwt.appspot.com",
//   messagingSenderId: "104293507739",
//   appId: "1:104293507739:web:5265dc582c414de39b9c3e"
apiKey: import.meta.env.VITE_APIKEY,
authDomain: import.meta.env.VITE_AUTHDOMAIN,
projectId: import.meta.env.VITE_PROJECTID,
storageBucket: import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGEINGSENDERID,
appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;