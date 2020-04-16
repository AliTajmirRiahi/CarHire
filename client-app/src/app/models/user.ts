export interface IUser {
  displayName: string;
  token: string;
  username: string;
  image?: string;
}

export interface IUserFormValues {
  emailOrPhoneNumber: string;
  password: string;
  displayName?: string;
  username?: string;
}
