import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: +process.env.PORT_DB,
            username: process.env.USER_DATABASE,
            password: process.env.PASSWORD_DATABASE,
            database: process.env.DATABASE,
            autoLoadEntities: true,
            synchronize: true,
        })
    ]
})
export class DatabaseModule {}
