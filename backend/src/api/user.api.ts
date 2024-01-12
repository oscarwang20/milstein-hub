import { USER } from "../index";
import { User } from "../types/types";

/**
 *
 */
export const getUsers = async () => {
  return USER.findMany();
};

/**
 *
 * @param netId
 */
export const getUserByNetId = async (netId: string) => {
  return USER.findUnique({ where: { netId: netId } });
};

/**
 *
 * @param newUser
 * @returns
 */
export const createUser = async (newUser: User) => {
  return USER.create({
    data: {
      ...newUser,
    },
  });
};
