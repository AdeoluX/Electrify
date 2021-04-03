require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/error");

const connectDB = require("./config/db");

connectDB();

require("./models/User");

require("./services/passport");

//mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());

const auth = require("./routes/authRoute");
const user = require("./routes/userRoute");

app.use("/auth", auth);
app.use("/user", user);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
