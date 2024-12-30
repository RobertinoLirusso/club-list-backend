import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    club_name: string;

    @Column()
    country: string;

    @Column()
    logo_url: string;

}