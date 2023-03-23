import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const API_KEY = process.env.REACT_APP_REACT_PIZZA

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'react-pizza-d6369.firebaseapp.com',
  projectId: 'react-pizza-d6369',
  storageBucket: 'react-pizza-d6369.appspot.com',
  messagingSenderId: '570086191000',
  appId: '1:570086191000:web:792865988276367540c5ed',
}

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
