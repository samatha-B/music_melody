const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

var serviceAccount = require("./serviceAccountkey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
db.collection("todo").add({
	email:"rithikarupaji@gmail.com",
    password:"nannu",
});