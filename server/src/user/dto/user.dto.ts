import { ObjectId } from 'mongoose';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}

export class UpdateUserDto {
  readonly name: string;
  readonly userId: ObjectId;
}

export class FollowAndUnfollowDto {
  readonly myId: ObjectId;
  readonly friendId: ObjectId;
}
