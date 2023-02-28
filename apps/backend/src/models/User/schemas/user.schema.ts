import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, index: { unique: true } })
  username: string;

  @Prop({ required: true, minlength: 8, maxlength: 64 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
