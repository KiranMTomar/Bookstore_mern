import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the MERN stack tutorial");
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {console.log("App Connected to MongoDB");
    
})
  .catch((err) => console.log(err));
