import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class UserEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    first_name: string;

    @Column({nullable: false})
    last_name: string;

    @Column({nullable: false, unique: true})
    username: string;

    @Column({nullable: false})
    password: string;

    @CreateDateColumn({
        update: false,
    })
    create_at: Date;

    @UpdateDateColumn({})
    update_at: Date;

    @DeleteDateColumn({})
    delete_at: Date;
}
