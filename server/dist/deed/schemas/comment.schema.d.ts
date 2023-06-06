import { Document } from 'mongoose';
import * as mongosse from 'mongoose';
import { Deed } from './deed.schema';
export type CommentDocument = Comment & Document;
export declare class Comment {
    text: string;
    author: string;
    deedId: Deed[];
}
export declare const CommentSchema: mongosse.Schema<Comment, mongosse.Model<Comment, any, any, any, Document<unknown, any, Comment> & Omit<Comment & {
    _id: mongosse.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongosse.DefaultSchemaOptions, Comment, Document<unknown, {}, mongosse.FlatRecord<Comment>> & Omit<mongosse.FlatRecord<Comment> & {
    _id: mongosse.Types.ObjectId;
}, never>>;
