import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.rqvqqsx.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
})
export class AppModule {}
