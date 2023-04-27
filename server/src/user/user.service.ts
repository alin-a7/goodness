import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { User, UserDocument } from './user.schema';
import { AddFriendDto, CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create({ ...dto, rate: 0 });
    return user;
  }
  async update(dto: UpdateUserDto): Promise<User> {
    const deed = await this.userModel.findById(dto.userId);
    deed.name = dto.name
    await deed.save()
    return deed;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user._id;
  }

  async getOne(id: ObjectId): Promise<User> {
    const deed = await this.userModel.findById(id).populate('deedList').populate('friends');
    return deed;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async ratingUpgrade(id: ObjectId) {
    const track = await this.userModel.findById(id);
    track.rate += 1
    track.save()
}

async addFriend(dto: AddFriendDto): Promise<User> {
  const friend = await this.userModel.findById(dto.friendId);
  const me = await this.userModel.findById(dto.myId)

  if(!me.friends.includes(friend._id)){
    me.friends.push(friend._id)
    await me.save();
  }

  return me;
}

}
