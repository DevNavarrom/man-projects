import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
//import { ConfigModule } from '@nestjs/config';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule
  ],
})
export class AppModule {}
