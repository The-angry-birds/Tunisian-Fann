const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Router = require("./routes/admin.routes.js");
const AuthRoutes = require("./routes/auth.routes");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", AuthRoutes);
app.use("/categorys", Router);
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
