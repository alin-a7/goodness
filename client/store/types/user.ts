export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  deedList: string[];
  rate: number;
}

export interface RegistrationFormState extends LoginFormState {
  name?: string;
}
export interface LoginFormState {
  email: string;
  password: string;
}

export interface UpdateUserDto {
  name: string;
  userId: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface changeFollowDto {
  myId: string;
  friendId: string;
}
export interface SuccesFetch {
  data: User;
}
