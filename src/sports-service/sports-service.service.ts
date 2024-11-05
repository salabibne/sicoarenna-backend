import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSportsServiceDto } from './dto/create-sports-service.dto';
import { UpdateSportsServiceDto } from './dto/update-sports-service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { sportsService } from './schemas/sportsService.schema';
import { Model } from 'mongoose';

@Injectable()
export class SportsService {
  constructor(
    @InjectModel(sportsService.name) private sportsModel: Model<sportsService>,
  ) {}

  async create(createSportsServiceDto: CreateSportsServiceDto) {
    const { time, place } = createSportsServiceDto;
    const existingRecord = await this.sportsModel.findOne({
      time,
      place,
    });
    console.log(existingRecord);
    if (existingRecord) {
      throw new HttpException('Record already exists', HttpStatus.BAD_REQUEST);
    }
    const createdRecord = new this.sportsModel(createSportsServiceDto);
    return await createdRecord.save();
  }

  async findAll() {
    return await this.sportsModel.find().exec();
  }

  // Find the Specific Sports Records
  async findBySports(sport: string) {
    return await this.sportsModel.find({ inputValue: sport }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} sportsServiceeam1234`;
  }

  update(id: number, updateSportsServiceDto: UpdateSportsServiceDto) {
    return `This action updates a #${id} sportsService`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportsService`;
  }
}
