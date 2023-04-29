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
  readonly id: ObjectId;
}

export class FollowAndUnfollowDto {
  readonly myId: ObjectId;
  readonly friendId: ObjectId;
}
export class RatingDto {
  readonly id: ObjectId;
  readonly increase: boolean;
}
