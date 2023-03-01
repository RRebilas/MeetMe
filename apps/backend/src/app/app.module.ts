import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../config/configuration.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigurationModule, UsersModule, AuthModule],
})
export class AppModule {}
