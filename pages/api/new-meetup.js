// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler (req,res) {
    if(req.method === "POST") {
        const data = req.body;

        // connet to db
        const client = await MongoClient.connect('mongodb+srv://Jacky:1fcBddFWilipOYdW@cluster0.jhqbnao.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: 'Meetup inserted !' });
    }
}


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Jacky:<password>@cluster0.jhqbnao.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


export default handler;