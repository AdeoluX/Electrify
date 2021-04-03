// const passport = require("passport");
// const mongoose = require("mongoose");
// const passportJWT = require("passport-jwt");
// const LocalStrategy = require("passport-local").Strategy;
// const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;
// const User = mongoose.model("User");

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     function (email, password, cb) {
//       return User.findOne({ email, password })
//         .then((user) => {
//           if (!user) {
//             return cb(null, false, { message: "Incorrect Email or password." });
//           }

//           return cb(null, user, { message: "Logged In Successfully" });
//         })
//         .catch((err) => cb(err));
//     }
//   )
// );

// passport.use(
//   new JWTStrategy(
//     {
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//       secretOrKey: "secret",
//     },
//     function (jwtPayload, cb) {
//       return User.findOneById(jwtPayload.id)
//         .then((user) => {
//           return cb(null, user);
//         })
//         .catch((err) => {
//           return cb(err);
//         });
//     }
//   )
// );
