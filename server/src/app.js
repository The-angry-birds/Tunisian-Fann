const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("../db");
const AuthRoutes = require("./routes/auth.routes.js");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("e", AuthRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
