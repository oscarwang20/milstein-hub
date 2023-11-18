import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Milstein!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
