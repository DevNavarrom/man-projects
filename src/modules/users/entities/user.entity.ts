import { Comment } from "src/modules/comments/entities/comment.entity";
import { Project } from "src/modules/projects/entities/project.entity";
import { Task } from "src/modules/tasks/entities/task.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    first_name: string;

    @Column('varchar')
    last_name: string;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar')
    rol: string;

    @Column('varchar')
    password: string;

    @ManyToMany(
        () => Project,
        (project) => project.users
    )
    projects?: Project[];

    @OneToMany(
        () => Task,
        (task) => task.user
    )
    tasks?: Task;

    @OneToMany(
        () => Comment,
        (comment) => comment.user
    )
    comments?: Comment[];
}
