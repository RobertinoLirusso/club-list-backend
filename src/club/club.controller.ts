import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { ClubService } from './club.service';
import { Club } from './club.entity';

@Controller('club')
export class ClubController {
    constructor(private readonly clubService: ClubService) {}

    @Get()
    @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    @Header('Pragma', 'no-cache')
    @Header('Expires', '0')
    @Header('Surrogate-Control', 'no-store')
    findAll(): Promise<Club[]> {
        return this.clubService.findAllClubs();
    }

    @Get(':id')
    @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    @Header('Pragma', 'no-cache')
    @Header('Expires', '0')
    @Header('Surrogate-Control', 'no-store')
    findOne(@Param('id') id: number): Promise<Club> {
        return this.clubService.findOne(id);
    }

    @Post('create')
    createClub(@Body() clubData: Partial<Club>): Promise<Club> {
        return this.clubService.createClub(clubData);
    }

    @Put('edit/:id')
    editClub(@Param('id') id: number, @Body() clubData: Partial<Club>): Promise<Club> {
        return this.clubService.editClub(id, clubData);
    }

    @Delete('delete/:id')
    removeClub(@Param('id') id: number): Promise<void> {
        return this.clubService.remove(id);
    }
}
