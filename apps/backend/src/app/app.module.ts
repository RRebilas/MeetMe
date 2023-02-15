import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiCoreFeatureModule } from '@meet-me/api/core/feature';
import { ApiAuthFeatureModule } from '@meet-me/api/auth/feature';

@Module({
  imports: [ApiCoreFeatureModule, ApiAuthFeatureModule],
  controllers: [AppController],
})
export class AppModule {}
