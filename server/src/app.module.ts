import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DeedModule } from './deed/deed.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.rqvqqsx.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    DeedModule,
    AuthModule,
  ],
})
export class AppModule {}
