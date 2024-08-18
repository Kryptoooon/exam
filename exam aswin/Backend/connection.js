const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
   "mongodb+srv://exam:exam@examintern.mkkdb.mongodb.net/exam?retryWrites=true&w=majority&appName=Examintern"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });