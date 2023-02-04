import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Rsvps {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        type: 'bool'
    })
    attend: boolean;

    @Column({
        unique: true,
    })
    phone: string;

    @Column()
    from: string;

    @Column()
    total: number;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
