import { Task } from "src/modules/tasks/entities/task.entity";
import { Users } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    content: string;

    @Column({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date;

    @ManyToOne(
        () => Users,
        (user) => user.comments
    )
    user: Users;

    @ManyToOne(
        () => Task,
        (task) => task.comments
    )
    task: Task;
}
