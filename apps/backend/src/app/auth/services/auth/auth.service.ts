import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private _usersService: UsersService) {}
}
