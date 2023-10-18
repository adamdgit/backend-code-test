const getAnalytics = require("firebase/analytics");
const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDWgj5guFdJBOn3wUd3lzWz8DBQ4VqR4Lg",
    authDomain: "beanscenetafe.firebaseapp.com",
    projectId: "beanscenetafe",
    storageBucket: "beanscenetafe.appspot.com",
    messagingSenderId: "1065402621574",
    appId: "1:1065402621574:web:39133b6bb358f509f73b07",
    measurementId: "G-D45Z365139"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const batch = db.batch();
const Menu = db.collection("menu");
const Categories = db.collection("categories");

module.exports = { Menu, Categories, batch };