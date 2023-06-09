import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],

  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
