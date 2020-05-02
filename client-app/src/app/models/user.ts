import { IFounder, Founder } from './founder';
import { IPhoto } from './photo';
export interface IUser {
  token: string;
  username: string;
  aFirstName: string;
  aLastName: string;
  founder: IFounder;
  photo?: IPhoto;
}

export interface IUserFormValues {
  emailOrPhoneNumber: string;
  password: string;
  displayName?: string;
  username?: string;
}

export class User implements IUser {
  token: string = '';
  username: string = '';
  aFirstName: string = '';
  aLastName: string = '';
  founder: IFounder = new Founder(undefined);
  photo?: IPhoto;

  constructor(init?: IUser) {
    Object.assign(this, init);
  }
}
