import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEpMBMmPFRGgiw8sHzqppv80Al0DYFJ3s",
  authDomain: "la-casa-de-lupulo.firebaseapp.com",
  projectId: "la-casa-de-lupulo",
  storageBucket: "la-casa-de-lupulo.appspot.com",
  messagingSenderId: "104097535731",
  appId: "1:104097535731:web:b4fcad2314358274ff0986",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
