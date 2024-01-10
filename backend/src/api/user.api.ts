import { USER } from "../dao/base.dao";

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

// export const createUser = async (netId: string, name: string) => {
