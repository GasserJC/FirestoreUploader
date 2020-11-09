# Instructions:

on your local machine create a folder/directory and cd into it and open a terminal.<br/>
` git clone https://github.com/GasserJC/FirestoreUploader.git`<br/>
` cd FirestoreUploader `<br/>
` npm install `<br/>
<br/>
Now you will need to move two JSON files into this directory. One will be your IAM GCP credentials, and the other will be the JSON file you need to upload into your GCP firestore collection. 
Learn how to get your GCP credentials here: https://cloud.google.com/docs/authentication/getting-started
<br/>
` npm start `<br/>

Now all you need to do is wait for the console to state, 'Finished Upload!!!' 

Barring connection, this will achieve approximately 2500 writes per minute. Further versions will attempt to decrease memory consumption (ie: spacial complexity.) Which will allow for faster upload times.
