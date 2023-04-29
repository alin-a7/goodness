import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { Deed, DeedDocument } from './schemas/deed.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateDeedDto, UpdateDeedDto } from './dto/deed.dto';
import { CreateCommentDto } from './dto/comment.dto';
import { User, UserDocument } from '../user/user.schema';

@Injectable()
export class DeedService {
  constructor(
    @InjectModel(Deed.name) private deedModel: Model<DeedDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(dto: CreateDeedDto): Promise<Deed> {
    const deed = await this.deedModel.create({ ...dto, isDone: false });
    const author = await this.userModel.findById(dto.authorId);
    author.deedList.push(deed._id);
    await author.save();
    return deed;
  }
  async update(dto: UpdateDeedDto): Promise<Deed> {
    const deed = await this.deedModel.findById(dto.deedId);
    deed.text = dto.text;
    deed.isDone = dto.isDone;
    await deed.save();
    return deed;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const deed = await this.deedModel.findByIdAndDelete(id);
    return deed._id;
  }

  async getOne(id: ObjectId): Promise<Deed> {
    const deed = await this.deedModel
      .findById(id)
      .populate('comments')
      .populate('authorId');
    return deed;
  }

  async getAll(): Promise<Deed[]> {
    const deeds = await this.deedModel.find().populate('authorId');
    return deeds;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const deed = await this.deedModel.findById(dto.deedId);
    const comment = await this.commentModel.create({ ...dto });
    deed.comments.push(comment._id);
    await deed.save();
    return comment;
  }
}
