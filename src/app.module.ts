import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ProjectsModule,
    TasksModule,
    CommentsModule
  ],
})
export class AppModule {}
