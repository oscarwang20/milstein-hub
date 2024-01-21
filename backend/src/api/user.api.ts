import { User } from "../types";
import { USER } from "../index";

/**
 *
 * @returns
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
  USER.findUniqueOrThrow({ where: { netId: newUser.netId } });
  return USER.create({
    data: {
      ...newUser,
    },
  });
};

/**
 *
 * @param netId
 * @param newUser
 */
export const updateUser = async (netId: string, newUser: User) => {
  USER.findUniqueOrThrow({ where: { netId: netId } });
  return USER.update({ where: { netId: netId }, data: { ...newUser } });
};

/**
 *
 * @param user
 * @returns
 */
export const deleteUserByNetId = async (netId: string) => {
  USER.findUniqueOrThrow({ where: { netId: netId } });
  return USER.delete({ where: { netId: netId } });
};
