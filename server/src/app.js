require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/admin.routes.js");
const adminRoutes = require("./routes/auth.admin.routes.js");
const port = process.env.PORT || 3000;
const path = require("path");

const usersRoutes = require("./routes/users.routes.js");
const usersSignupRoutes = require("./routes/auth.users.routes.js");
const artistAuthRoutes = require("./routes/auth.artists.routes.js");
const artistRoutes = require("./routes/artists.routes");
const artworkRouter = require("./routes/artwork-routes");
const auctionsRouter = require("./routes/auctions.routes");
const likesRouter = require("./routes/routes.likes");
const verifyRouter = require("./routes/auth.verify.routes");
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
morgan(":method :url :status :res[content-length] - :response-time ms");
app.use("/api/auth/admin", adminRoutes);
app.use("/api/categories", router);
app.use("/api/artworks", artworkRouter);

app.use("/api/auth/users", usersSignupRoutes);
app.use("/api/users", usersRoutes);

app.use("/api/auth/artists", artistAuthRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/auctions", auctionsRouter);
app.use("/api/auth", verifyRouter);
app.use("/api/likes", likesRouter);
// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var Publishable_Key = process.env.Publishable_Key;
var Secret_Key = process.env.Secret_Key;

const stripe = require("stripe")(Secret_Key);


app.get("/", function (req, res) {
  res.render("Home", {
    key: Publishable_Key,
  });
});

app.post('/payment', function(req, res){ 

    // Moreover you can take more details from user 
    // like Address, Name, etc from form 
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name: 'Gautam Sharma', 
        address: { 
            line1: 'TC 9/4 Old MES colony', 
            postal_code: '110092', 
            city: 'New Delhi', 
            state: 'Delhi', 
            country: 'India', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 7000,    // Charing Rs 25 
            description: 'Web Development Product', 
            currency: 'USD', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.send("Success") // If no error occurs 
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}) 


// app.post("/sendmessage", (req, res) => {
//   console.log(req.body);

//   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   const client = require("twilio")(accountSid, authToken);

//   client.messages
//     .create({
//       body: "Welcome to our platforme",
//       from: "+15034063023",
//       to: "+21622292162",
//     })
//     .then((message) => res.send(message));
// });


app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
