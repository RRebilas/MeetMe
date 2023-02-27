export type UserDto = {
  username: string;
};

export type LoginUserDto = {
  username: string;
  password: string;
};

export type CreateUserDto = {
  username: string;
  password: string;
};

export type ChangeUserPasswordDto = CreateUserDto & { repeatPassword: string };
