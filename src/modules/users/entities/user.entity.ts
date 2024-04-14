import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
