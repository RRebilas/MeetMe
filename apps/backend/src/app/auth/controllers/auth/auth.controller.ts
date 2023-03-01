import { CreateUserDto, LoginUserDto } from '@meet-me/shared/data-models';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../../../models/User/schemas/user.schema';
import { UsersService } from '../../../users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(private _userService: UsersService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this._userService.create(createUserDto);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() loginUserDto: LoginUserDto): Promise<string> {
    return 'hello here ' + loginUserDto.username;
  }
}
