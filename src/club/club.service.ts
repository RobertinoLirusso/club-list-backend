import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
    constructor(
        @InjectRepository(Club)
        private readonly  clubRepository: Repository<Club>
    ) {}


    async findAllClubs(): Promise <Club[]> {
        return this.clubRepository.find();
    }

    async findOne(id: number): Promise <Club> {
        return this.clubRepository.findOne(
            {
                where: {id}
            }
        );
      }

    async createClub(clubData: Partial<Club>): Promise<Club> {
        const club = this.clubRepository.create(clubData);
        return this.clubRepository.save(club);

    }

    async editClub(id: number, clubData: Partial<Club>): Promise<Club> {

        await this.clubRepository.update(id, clubData)
        return this.clubRepository.findOne(
            {
                where: {id}
            }
        )
    }

    async remove(id: number): Promise<void> {
        await this.clubRepository.delete(id);
      }
}
