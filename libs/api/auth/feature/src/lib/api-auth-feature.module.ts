import { AuthService } from '@meet-me/api/auth/data-access';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ApiUsersFeatureModule } from '@meet-me/api/users/feature';

@Module({
  imports: [
    ApiUsersFeatureModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class ApiAuthFeatureModule {}
