import { IFounder } from './founder';
export interface IUser {
  token: string;
  username: string;
  founder: IFounder;
  image?: string;
}

export interface IUserFormValues {
  emailOrPhoneNumber: string;
  password: string;
  displayName?: string;
  username?: string;
}
