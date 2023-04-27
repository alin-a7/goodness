import { Module } from '@nestjs/common';

import { DeedController } from './deed.controller';
import { DeedService } from './deed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Deed, DeedSchema } from './schemas/deed.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { User, UserSchema } from '../user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deed.name, schema: DeedSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [DeedController],
  providers: [DeedService],
})
export class DeedModule {}
