import { CreateUserDto, LoginUserDto } from '@meet-me/shared/data-models';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../../../common/guards/local-auth.guards';
import { User } from '../../../../models/User/schemas/user.schema';
import { UsersService } from '../../../users/services/users.service';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private _userService: UsersService,
    private _authService: AuthService
  ) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this._userService.create(createUserDto);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @Body() loginUserDto: LoginUserDto
  ): Promise<{ accessToken: string }> {
    return this._authService.login(loginUserDto);
  }
}
