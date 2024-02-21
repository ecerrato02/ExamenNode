const express = require('express')
const cors = require('cors');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const app = express();
const jsonpath = require('jsonpath');


const serviceAccount = require('.\\exeduardocerratohernandez-firebase-adminsdk-6va9g-2e40da49e9.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.use(express.json());
app.use(cors())

port = 3020;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})

const mundial = db.collection('mundial22')
const partits = db.collection('mundial22').doc('final22')

app.put('/eduardocerrato/estadi', async (req, res) => {
  const estadio = {estadio: req.body.estadio}
  await mundial.doc('final22').update({
    estadio: estadio
  })

  app.get('/eduardocerrato/jugadors', async (req, res) =>{
    const doc = await partits.get();
    const data = doc.data();
    res.json(data)
    console.log(data)
  })
})
