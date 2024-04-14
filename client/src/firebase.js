// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'virtualverse-bd359.firebaseapp.com',
  projectId: 'virtualverse-bd359',
  storageBucket: 'virtualverse-bd359.appspot.com',
  messagingSenderId: '931214692311',
  appId: '1:931214692311:web:fe8fe3ff814c0499b3c592',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

