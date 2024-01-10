import express from "express";
import dotenv from "dotenv";
import { getUsers, getUserByNetId } from "./api/user.api";

dotenv.config({
  path: ".env",
});

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello Milstein!");
});

app.get("/users", (req, res) => {
  getUsers().then((users) => {
    res.status(200).send(users);
  });
});

app.get("/users/:netId", (req, res) => {
  getUserByNetId(req.params.netId).then((user) => {
    res.status(200).send(user);
  });
});

app.post("/users", (req, res) => {
  res.status(200).send("Not implemented");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
