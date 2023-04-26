import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongosse from 'mongoose'

import { User } from 'src/user/user.schema';
import { Comment } from './comment.schema';

export type DeedDocument = Deed & Document;

@Schema()
export class Deed {
  @Prop()
  text: string;

  @Prop()
  isDone: boolean;

  // @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'User' }] })
  // authorId: User;

  @Prop()
  author: string;

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];

}

export const DeedSchema = SchemaFactory.createForClass(Deed);
