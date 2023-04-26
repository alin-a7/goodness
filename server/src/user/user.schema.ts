import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongosse from 'mongoose'

import { Deed } from '../deed/schemas/deed.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'User' }] })
  frinds: User[];

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'Deed' }] })
  deedList: Deed[];

  @Prop()
  rate: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
