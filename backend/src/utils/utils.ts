export const getNetIdFromEmail = (email: string) => {
  return email.split("@")[0];
};
