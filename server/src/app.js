const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Router = require("./routes/admin.routes.js");
const adminRoutes = require("./routes/admin-auth.routes.js");
const usersRoutes =require("./routes/users.routes.js");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use("/api/auth", adminRoutes);
app.use("/categorys", Router);
app.use("/users",usersRoutes)
app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
