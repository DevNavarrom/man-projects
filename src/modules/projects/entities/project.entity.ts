import { Task } from "src/modules/tasks/entities/task.entity";
import { Users } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('text')
    description: string;

    @Column('date')
    start_date: string;

    @Column('date')
    end_date: string;

    @Column('char', { length: 10 })
    status: string;

    @ManyToMany(
        () => Users,
        (user) => user.projects,
        { cascade: true }
    )
    @JoinTable()
    users?: Users[];

    @OneToMany(
        () => Task,
        (task) => task.project,
        { cascade: true }
    )
    tasks?: Task;
}
