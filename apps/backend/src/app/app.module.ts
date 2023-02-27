import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiCoreFeatureModule } from '@meet-me/api/core/feature';

@Module({
  imports: [ApiCoreFeatureModule],
  controllers: [AppController],
})
export class AppModule {}
