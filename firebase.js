import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAhogyNaEzapNxC35AcZ5CPyEwLuvrHWuY",
    authDomain: "heart-attack-detection-47aee.firebaseapp.com",
    projectId: "heart-attack-detection-47aee",
    storageBucket: "heart-attack-detection-47aee.appspot.com",
    messagingSenderId: "280832508927",
    appId: "1:280832508927:web:861d7021bbaed9a7471dca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);