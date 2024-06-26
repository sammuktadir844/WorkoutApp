require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workout");

//express app
const app = express();

//middleware
//app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workout", workoutRoutes);

const port = process.env.PORT || 4000;

//listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
