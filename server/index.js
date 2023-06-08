const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = 'mongodb://127.0.0.1:27017' // MongoDB server address
const client = new MongoClient(uri);  // create new connection to use mongodb

async function run() {
    try {
        const productCollection = client.db('moonTech').collection('product');

        app.get('/product', async (req, res) => {
            const data = await productCollection.find({}).toArray();
            res.send(data)
        })

    } catch (error) {
        console.log(error)
    }
}
run().catch(error => console.log(error));









app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log("server is running on port:", port);
})