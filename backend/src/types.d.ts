export type User = {
  email: string;
  name: string;
  admin: boolean;
  netId: string;
};

export type Equipment = {
  serial: number;
  name: string;
  description: string;
  userId?: number;
  dateRented?: Date;
  duration?: number;
};

export type RentalRequest = {
  id: number;
  userId: number;
  equipmentId: number;
  dateRequested: Date;
  dateApproved?: Date;
};

export type Room = {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  duration: number;
  userId: number;
};
