import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const user = configService.get('database.user');
        const password = configService.get('database.password');
        const port = configService.get('database.port');
        const databaseName = configService.get('database.database_name');

        return {
          uri: `mongodb://${user}:${password}@localhost:${port}/${databaseName}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class ConfigurationModule {}
