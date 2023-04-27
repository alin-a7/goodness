import { ObjectId } from 'mongoose';

export class CreateUserDto {
  readonly name: string;
  readonly password: string;
}

export class UpdateUserDto {
  readonly name: string;
  readonly userId: ObjectId;
}

export class AddFriendDto {
  readonly myId: ObjectId;
  readonly friendId: ObjectId;
}
