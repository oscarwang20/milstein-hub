import { PrismaClient } from "@prisma/client";
import { getUserByNetId } from "../api/user.api";

const prisma = new PrismaClient();

const netId = "test";
console.log(getUserByNetId(netId));
