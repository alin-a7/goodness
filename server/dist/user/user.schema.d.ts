import { Document } from 'mongoose';
import * as mongosse from 'mongoose';
import { Deed } from '../deed/schemas/deed.schema';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    friends: mongosse.ObjectId[];
    deedList: Deed[];
    rate: number;
}
export declare const UserSchema: mongosse.Schema<User, mongosse.Model<User, any, any, any, Document<unknown, any, User> & Omit<User & {
    _id: mongosse.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongosse.DefaultSchemaOptions, User, Document<unknown, {}, mongosse.FlatRecord<User>> & Omit<mongosse.FlatRecord<User> & {
    _id: mongosse.Types.ObjectId;
}, never>>;
