import { CreateUserDto } from '@meet-me/shared/data-models';
import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../../../../models/User/schemas/user.schema';
import { UsersService } from '../../../users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(private _userService: UsersService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this._userService.create(createUserDto);
  }
}
