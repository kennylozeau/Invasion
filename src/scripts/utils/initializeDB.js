import firebase from 'firebase/app';
import 'firebase/firestore';

function initializeDB() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBoLEjbvc3K2e2m3EA378jmuaJ9fGhc15g',
        authDomain: "invasion-3f8d9.firebaseapp.com",
        projectId: 'invasion-3f8d9'
    });

    const db = firebase.firestore();

    return db;
}

export default initializeDB;