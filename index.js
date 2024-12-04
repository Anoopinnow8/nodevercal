const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
 
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI
  , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Server connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });


  app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
