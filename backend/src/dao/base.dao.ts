import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const USER = prisma.user;
export const EQUIPMENT = prisma.equipment;
export const RENTAL_REQUEST = prisma.rentalRequest;
export const ROOM = prisma.room;
