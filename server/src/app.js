const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Router = require("./routes/admin.routes.js");
const adminRoutes = require("./routes/admin-auth.routes.js");

const usersRoutes = require("./routes/users.routes.js");
const usersSignupRoutes = require("./routes/users-signup-router.js");
require('dotenv').config()
require('./passport/passport.setup')


const usersRoutes =require("./routes/users.routes.js");
const usersSignupRoutes=require("./routes/users-signup-router.js")

const usersRoutes = require("./routes/users.routes.js");
const artistAuthRoutes = require("./routes/artist-auth-routes.js");

const app = express();
// require('dotenv').config()
// require('./passport/passport.setup')
// var passport = require('passport');
// app.set("view engine", "ejs");
// app.use(passport.initialize());
// app.use(passport.session());


app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use("/api/auth", adminRoutes);
app.use("/categorys", Router);

app.use("/users", usersRoutes);
app.use("/users/auth", usersSignupRoutes);



// const isLoggedIn = (req, res, next) => {
//   if (req.user) {
//       next();
//   } else {
//       res.sendStatus(401);
//   }
// }

// app.get('/good', isLoggedIn, (req, res) =>{
//   res.render("/",{name:req.user.displayName,email:req.user.emails[0].value})
// })
// app.get('/google',passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
// function(req, res) {

//     res.redirect('/good');
//   }
// );


app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port 3001");


app.use("/users",usersRoutes)
app.use("/users/auth",usersSignupRoutes)

app.use("/users", usersRoutes);
app.use("/artist/auth", artistAuthRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");

});
