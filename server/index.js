const express = require("express");
let formcollection = require("../server/Model/Form.model.js");
const { mongoose } = require("mongoose");

require("dotenv").config();
var cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  let { username, email, subject, message } = req.body;
  let addDataToDB = formcollection.create({
    username,
    email,
    subject,
    message,
  });
  res.status("user data added successfully", addDataToDB);
});

const port = process.env.PORT || 4000;

let connect = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is Running on port ${port} `);
    });
    await mongoose.connect("mongodb://127.0.0.1:27017/Student");

    console.log("db connected");
  } catch (err) {}
};
connect();
