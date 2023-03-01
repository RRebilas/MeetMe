import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  user: process.env.MEETME_DATABASE_USER,
  password: process.env.MEETME_DATABASE_PASSWORD,
  port: process.env.MONGODB_DOCKER_PORT,
  database_name: process.env.MONGODB_DATABASE,
}));
