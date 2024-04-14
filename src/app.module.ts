import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ProjectsModule,
    TasksModule
  ],
})
export class AppModule {}
