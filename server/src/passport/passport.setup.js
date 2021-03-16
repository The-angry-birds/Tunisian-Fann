const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy({
    clientID:"532661032956-q5e6ser8v1mhgvl79cke9d7pmgbhaegm.apps.googleusercontent.com",
    clientSecret:"y0Krxj0peEnZ1vkkRdP45iZn",

    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback:true
  },function(request,accessToken,refreshToken,profile,done){
      console.log(profile);
      return done(null,profile)
  }
  )
);
