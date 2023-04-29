// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTNML6EnlQNHQQjn9UfiJeTgahFLwWdSs",
    authDomain: "ema-john-with-firebase-a-50b51.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-50b51",
    storageBucket: "ema-john-with-firebase-a-50b51.appspot.com",
    messagingSenderId: "692472963046",
    appId: "1:692472963046:web:d196e4c51552cdfc300027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;