import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MEETME_DATABASE_USER}:${process.env.MEETME_DATABASE_PASSWORD}@localhost:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}`
    ),
  ],
})
export class ConfigurationModule {}
