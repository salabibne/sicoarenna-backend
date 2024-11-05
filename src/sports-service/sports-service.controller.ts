import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportsService } from './sports-service.service';
import { CreateSportsServiceDto } from './dto/create-sports-service.dto';
import { UpdateSportsServiceDto } from './dto/update-sports-service.dto';

@Controller('sports-service')
export class SportsServiceController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  create(@Body() createSportsServiceDto: CreateSportsServiceDto) {
    return this.sportsService.create(createSportsServiceDto);
  }

  @Get()
  findAll() {
    return this.sportsService.findAll();
  }

  @Get('id1/:id')
  findOne(@Param('id') id: string) {
    return this.sportsService.findOne(+id);
  }

  // get the  sports service by name
  @Get(':sport')
  findBySports(@Param('sport') sport: string) {
    return this.sportsService.findBySports(sport);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportsServiceDto: UpdateSportsServiceDto,
  ) {
    return this.sportsService.update(+id, updateSportsServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportsService.remove(+id);
  }
}
