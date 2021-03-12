const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Router = require("./routes/admin.routes.js");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/admin", Router);
app.listen(process.env.PORT || 3000);
