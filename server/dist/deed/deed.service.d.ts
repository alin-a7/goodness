import { Model, ObjectId } from 'mongoose';
import { Deed, DeedDocument } from './schemas/deed.schema';
import { CommentDocument } from './schemas/comment.schema';
import { CreateDeedDto, UpdateDeedDto } from './dto/deed.dto';
import { CreateCommentDto } from './dto/comment.dto';
import { UserDocument } from '../user/user.schema';
export declare class DeedService {
    private deedModel;
    private commentModel;
    private userModel;
    constructor(deedModel: Model<DeedDocument>, commentModel: Model<CommentDocument>, userModel: Model<UserDocument>);
    create(dto: CreateDeedDto): Promise<Deed>;
    update(dto: UpdateDeedDto): Promise<Deed>;
    delete(id: ObjectId): Promise<ObjectId>;
    getOne(id: ObjectId): Promise<Deed>;
    getAll(): Promise<Deed[]>;
    addComment(dto: CreateCommentDto): Promise<Deed>;
}
