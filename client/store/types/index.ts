export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  deedList: Deed[];
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
  id: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface changeFollowDto {
  myId: string;
  friendId: string;
}
export interface SuccessFetch {
  data: User;
}

export interface Deed {
  _id: string;
  authorId: string[];
  text: string;
  isDone: boolean;
  comments: string[];
}

export interface CreateDeedDto {
  id: string;
  text: string;
}

export interface UpdateDeedDto {
  isDone: boolean;
  text: string;
  id: string;
}
export interface RatingDto {
  id: string;
  increase: boolean;
}
