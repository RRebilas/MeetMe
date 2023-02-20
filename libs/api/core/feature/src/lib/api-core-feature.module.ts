import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// Add env variables here

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MEETME_DATABASE_USER}:${process.env.MEETME_DATABASE_PASSWORD}@localhost:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}`
    ),
  ],
})
export class ApiCoreFeatureModule {}
