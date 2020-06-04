const firebase = require('firebase/app');

require("firebase/firestore");

const fire =  firebase.initializeApp({
    apiKey: "AIzaSyCtaPzCfomTASo5oj3hvukWCqNojLWURtI",
    authDomain: "trycrud1.firebaseapp.com",
    databaseURL: "https://trycrud1.firebaseio.com",
    projectId: "trycrud1",
    storageBucket: "trycrud1.appspot.com",
    messagingSenderId: "248022687242",
    appId: "1:248022687242:web:1f1105d6e79858df"
  })

export default fire.firestore()