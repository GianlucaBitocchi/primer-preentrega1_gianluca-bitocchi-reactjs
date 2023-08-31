import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPxXPNSqD2FENWG58pJrPguHJk2cIsLUE",
    authDomain: "gb-proparts-f5464.firebaseapp.com",
    projectId: "gb-proparts-f5464",
    storageBucket: "gb-proparts-f5464.appspot.com",
    messagingSenderId: "126256199345",
    appId: "1:126256199345:web:1ae57575e73f51c6bc1490"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);