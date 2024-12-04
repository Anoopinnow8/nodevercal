const mongoURI = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});