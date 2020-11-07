const express = require('express');
const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./creds.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const collection = db.collection('Collection Name');

async function UploadContent(){
  let JSONData = require('./data.json');
  for (let ObjectKey in JSONData){
    let Object = JSONData[ObjectKey];
    const res = await collection.add(Object);
  }
}

app.get('/*',  (req, res) => {
  res.status(200).send("This may take awhile, check the terminal to check when your upload is done!");
});

const PORT = 5087;
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
  UploadContent().then(()=>{
    console.log("Finished Upload!!!");
  });
  console.log('Press Ctrl+C to quit.');
});

module.exports = app