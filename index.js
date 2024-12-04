const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());


const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
try{
  await client.connect();

   await client.db("admin").command({ ping: 1 });
  console.log(
    "Pinged your deployment. You successfully connected to MongoDB!"
  );
}
finally{

}
}

run().catch(error => console.log)
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});