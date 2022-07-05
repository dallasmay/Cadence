require("dotenv").config()
const {SERVER_PORT} = process.env

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {  seed  } = require("./controller")

app.post("/test-seed", seed)



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))