import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXbFVWkiUwBX_m0MhJBGLjk_IVaMtp8OI',
  authDomain: 'luxor-ecommerce.firebaseapp.com',
  projectId: 'luxor-ecommerce',
  storageBucket: 'luxor-ecommerce.appspot.com',
  messagingSenderId: '537097473030',
  appId: '1:537097473030:web:354ab6ad546b9f66bf8787',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
