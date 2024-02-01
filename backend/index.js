import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRote from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// // middleware for parsing request body
app.use(express.json());

// MiddleleWare to handle CORS POLICY
// OPTION 1 : allow all origins with default cors(*)
app.use(cors());  
// OPTION 2 : allow custom/specific origins
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders : ["Content-Type"],
// }))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the MERN stack tutorial");
});

app.use("/books", booksRote);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
