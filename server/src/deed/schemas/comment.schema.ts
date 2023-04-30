import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongosse from 'mongoose';
import { Deed } from './deed.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: [{ type: mongosse.Schema.Types.ObjectId, ref: 'Deed' }] })
  deedId: Deed[];
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
