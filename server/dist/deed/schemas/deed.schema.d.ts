import { Document } from 'mongoose';
import * as mongosse from 'mongoose';
import { User } from 'src/user/user.schema';
import { Comment } from './comment.schema';
export type DeedDocument = Deed & Document;
export declare class Deed {
    text: string;
    isDone: boolean;
    authorId: User;
    comments: Comment[];
}
export declare const DeedSchema: mongosse.Schema<Deed, mongosse.Model<Deed, any, any, any, Document<unknown, any, Deed> & Omit<Deed & {
    _id: mongosse.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongosse.DefaultSchemaOptions, Deed, Document<unknown, {}, mongosse.FlatRecord<Deed>> & Omit<mongosse.FlatRecord<Deed> & {
    _id: mongosse.Types.ObjectId;
}, never>>;
