// ./initAuth.js
import { initializeApp } from 'firebase/app';

export const initAuth = () => {
  initializeApp({
    apiKey: "AIzaSyCWkBlR8bMBBm5QmqMSgsHixO0Foky6dTo",
    authDomain: "poli-vagas-auth.firebaseapp.com",
    projectId: "poli-vagas-auth",
    storageBucket: "poli-vagas-auth.appspot.com",
    messagingSenderId: "1070791957748",
    appId: "1:1070791957748:web:95ef2e09bc8dac696b12a1",
  });
}
