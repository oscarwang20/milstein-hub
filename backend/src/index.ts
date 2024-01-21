import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import {
  getUsers,
  getUserByNetId,
  createUser,
  deleteUserByNetId,
} from "./api/user.api";
import { getNetIdFromEmail } from "./utils/utils";
import { User } from "./types";

dotenv.config({
  path: ".env",
});

const app = express();
app.use(express.json());
const prisma = new PrismaClient();
const port = process.env.PORT || 8080;

export const USER = prisma.user;
export const EQUIPMENT = prisma.equipment;
export const RENTAL_REQUEST = prisma.rentalRequest;
export const ROOM = prisma.room;

app.get("/api/", (req, res) => {
  res.send("Hello Milstein!");
});

app.get("/api/users", (req, res) => {
  getUsers().then((users) => {
    res.status(200).send(users);
  });
});

app.get("/api/users/:netId", (req, res) => {
  getUserByNetId(req.params.netId).then((user) => {
    res.status(200).send(user);
  });
});

app.post("/api/users", (req, res) => {
  const json = req.body;
  const newUser: User = {
    ...json,
    netId: getNetIdFromEmail(json.email),
  };
  createUser(newUser)
    .then((user) => res.status(200).send(user))
    .catch((e) => res.send("User already exists!"));
});

app.delete("/api/users/:netId", (req, res) => {
  deleteUserByNetId(req.params.netId)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => res.send("User does not exist!"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
