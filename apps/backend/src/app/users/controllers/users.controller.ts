import { Controller, Get } from '@nestjs/common';
import { User } from '../../../models/User/schemas/user.schema';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private _userService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this._userService.findAll();
  }
}
