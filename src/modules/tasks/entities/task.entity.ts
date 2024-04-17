import { Comment } from "src/modules/comments/entities/comment.entity";
import { Project } from "src/modules/projects/entities/project.entity";
import { Users } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    title: string;

    @Column('text')
    description: string;

    @Column('int')
    priority: number;

    @Column({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date;

    @Column('date')
    end_date: string;

    @ManyToOne(
        () => Project,
        (project) => project.tasks
    )
    project: Project;

    @ManyToOne(
        () => Users,
        (user) => user.tasks
    )
    user: Users;

    @OneToMany(
        () => Comment,
        (comment) => comment.task,
        { cascade: true }
    )
    comments?: Comment[];
}
