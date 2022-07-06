require("dotenv").config()
const {SERVER_PORT} = process.env

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {  seed, getFamousQuote  } = require("./controller")

// DEV
app.post("/seed-my-database", seed)

// Famous Quote Endpoints
app.get("/api/get_famous_quote", getFamousQuote)


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))