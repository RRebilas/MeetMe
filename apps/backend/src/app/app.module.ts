import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/meetme')],
  controllers: [AppController],
})
export class AppModule {}
