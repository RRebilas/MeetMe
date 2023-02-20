import { AuthService } from '@meet-me/api/auth/data-access';
import { Module } from '@nestjs/common';
import { JwtStrategy, LocalStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import { ApiUsersFeatureModule } from '@meet-me/api/users/feature';

@Module({
  imports: [
    ApiUsersFeatureModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class ApiAuthFeatureModule {}
