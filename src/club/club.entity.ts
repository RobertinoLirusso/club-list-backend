import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logo_url: string;

    @Column('varchar', {length: 500})
    description: string;

}