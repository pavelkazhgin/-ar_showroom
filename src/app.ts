
require('dotenv').config();
const express = require("express");

const app = express();
const orders =  require("./api/routes");

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use("/api", orders);

export { app };
