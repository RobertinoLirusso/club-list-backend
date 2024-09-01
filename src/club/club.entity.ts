import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    city_country: string;

    @Column('varchar', {length: 300}) 
    description: string

    @Column()
    logo_url: string;

}