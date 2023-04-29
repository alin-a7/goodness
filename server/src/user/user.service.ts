import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { User, UserDocument } from './user.schema';
import {
  FollowAndUnfollowDto,
  CreateUserDto,
  UpdateUserDto,
  RatingDto,
} from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create({ ...dto, rate: 0 });
    return user;
  }
  async update(dto: UpdateUserDto): Promise<User> {
    const deed = await this.userModel.findById(dto.id);
    deed.name = dto.name;
    await deed.save();
    return deed;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user._id;
  }

  async getOne(id: ObjectId): Promise<User> {
    const deed = await this.userModel
      .findById(id)
      .populate('deedList')
      .populate('friends');
    return deed;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel
      .find()
      .populate('deedList')
      .populate('friends');
    return users;
  }

  async ratingUpgrade(dto: RatingDto) {
    const user = await this.userModel.findById(dto.id);
    dto.increase ? (user.rate += 1) : (user.rate -= 1);
    await user.save();
    
    return user
  }

  async followAndUnfollow(dto: FollowAndUnfollowDto): Promise<User> {
    const friend = await this.userModel.findById(dto.friendId);
    const me = await this.userModel.findById(dto.myId);

    if (!me.friends.includes(friend._id)) {
      me.friends = [...me.friends, friend._id];
    } else {
      const newFriends = me.friends.filter(
        (myFriend) => myFriend.toString() !== friend._id.toString(),
      );
      me.friends = [...newFriends];
    }
    await me.save();

    return me;
  }
}
