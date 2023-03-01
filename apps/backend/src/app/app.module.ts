import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../config/configuration.module';
import { UserModule } from './user/controllers/user.module';

@Module({
  imports: [ConfigurationModule, UserModule],
})
export class AppModule {}
