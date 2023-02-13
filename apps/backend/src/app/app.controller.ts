import { AuthService } from '@meet-me/api/auth/data-access';
import { LocalAuthGuard } from '@meet-me/api/auth/feature';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private _authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this._authService.login(req.user);
  }
}
