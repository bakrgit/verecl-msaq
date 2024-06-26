export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Record<string, unknown>;
  ip: string;
  address: Record<string, unknown>;
  macAddress: string;
  university: string;
  bank: Record<string, unknown>;
  company: Record<string, unknown>;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Record<string, unknown>;
  role: string;
};

//user login
export type UserLogin = {
  username: string;
  password: string;
};
