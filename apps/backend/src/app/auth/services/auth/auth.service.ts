import { LoginUserDto } from '@meet-me/shared/data-models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../../../models/User/schemas/user.schema';
import { UsersService } from '../../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this._usersService.findOne({ username });

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: LoginUserDto) {
    const foundUser = await this._usersService.findOne({
      username: user.username,
    });

    if (!user) {
      return;
    }

    const payload = { username: foundUser.username, sub: foundUser.id };
    return {
      accessToken: this._jwtService.sign(payload),
    };
  }
}
