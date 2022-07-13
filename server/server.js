require("dotenv").config()
const {SERVER_PORT} = process.env

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { seed, getFamousQuote, postMyQuote, getMyQuotes, findQuotes } = require("./controller");

// DEV
app.post("/seed-my-database", seed);

// Famous Quote Endpoints
app.get("/api/get-famous-quote", getFamousQuote);

// My Quotes Endpoints
app.post("/api/post-my-quote", postMyQuote);
app.get("/api/get-all-quotes", getMyQuotes);

// Find Quotes Endpoints
app.post("/api/find-quotes", findQuotes);


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))