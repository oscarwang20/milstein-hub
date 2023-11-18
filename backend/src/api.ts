import express from "express";
import dotenv from "dotenv";
import { getEvents } from "./dao/eventsDao";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Milstein!");
});

app.get("/api/events/", (req, res) => {
  getEvents()
    .then((events) => {
      res.send(events);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
