import { Injectable } from '@nestjs/common';
import { User } from '../../../../models/User/schemas/user.schema';
import { UsersService } from '../../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private _usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this._usersService.findOne({ username });

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
