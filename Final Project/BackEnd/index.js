const express = require("express");
const app = express();
const adminRoute = require("./router/adminRoute");
const dotenv = require("dotenv");
const userRoute = require("./router/userRoute");
dotenv.config({ path: "./config.env" });
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const DB = process.env.DATABASE;

dotenv.config({ path: "./config.env" });
app.use(bodyParser.json());

app.use(require("./router/userRoute"));
// app.use('/user',userRoute);
// app.use('/admin',adminRoute);

app.use((error, req, res, next) => {
  res.status(error.code);

  res.json({
    message: error.message || "Unknown Error Occured",
    code: error.code,
  });
});

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening");
});
