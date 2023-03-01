import { CreateUserDto } from '@meet-me/shared/data-models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../../models/User/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private _userModel: Model<UserDocument>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this._userModel(createUserDto);
    return createdUser.save();
  }
}
