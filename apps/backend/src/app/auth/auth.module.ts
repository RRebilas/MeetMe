import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UsersModule],
})
export class AuthModule {}
