const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/admin.routes.js");
const adminRoutes = require("./routes/admin-auth.routes.js");

const usersRoutes = require("./routes/users.routes.js");
const usersSignupRoutes = require("./routes/users-signup-router.js");
const artistAuthRoutes = require("./routes/artist-auth-routes.js");
const routerArtist = require("./routes/artist-data.js");
const artworkRouter = require("./routes/artwork-routes.js");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
morgan(":method :url :status :res[content-length] - :response-time ms");
app.use("/api/auth", adminRoutes);
app.use("/categorys", router);
app.use("/artist/verification", routerArtist);
app.use("/users/auth", usersSignupRoutes);
app.use("/users", usersRoutes);
app.use("/artworks", artworkRouter);
app.use("/artist/auth", artistAuthRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
