import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rsvp {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    attend: boolean;

    @Column({
        unique: true,
    })
    phone: string;

    @Column()
    from: string;

    @Column()
    total: number;
}
