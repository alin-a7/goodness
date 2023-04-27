import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongosse from 'mongoose';

import { Deed } from '../deed/schemas/deed.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'User' }] })
  friends: User[];

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'Deed' }] })
  deedList: Deed[];

  @Prop({ required: true })
  rate: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
