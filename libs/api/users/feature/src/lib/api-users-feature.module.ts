import { UsersService } from '@meet-me/api/users/data-access';
import { Module } from '@nestjs/common';
import { ApiUsersFeatureController } from './api-users-feature.controller';

@Module({
  controllers: [ApiUsersFeatureController],
  providers: [UsersService],
  exports: [UsersService],
})
export class ApiUsersFeatureModule {}
