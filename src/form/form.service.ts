import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FormData } from './schemas/form.schema';
import { Model } from 'mongoose';
@Injectable()
export class FormService {
  // private submitFormDatas=[]
  // create(createFormDto: CreateFormDto) {
  //   const newSubmitFormDatas = {
  //     id: this.submitFormDatas.length + 1,
  //     ...CreateFormDto,
  //   };
  //   this.submitFormDatas.push(newSubmitFormDatas);
  //   return newSubmitFormDatas;
  // }

  constructor(@InjectModel(FormData.name) private formModel: Model<FormData>) {}
  async create(createFormDto: CreateFormDto): Promise<FormData> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async findAll(): Promise<FormData[]> {
    return this.formModel.find().sort({ _id: -1 }).exec();
  }

  async findOneBooking({ sport, date, status }) {
    return await this.formModel.findOne({
      sportsCategory: sport,
      date,
      status,
    });
  }

  async updateBookingStatus(transactionId: string, status: string) {
    const form = await this.formModel.findOne({ transactionId });
    if (!form) {
      throw new HttpException('Form not found', HttpStatus.NOT_FOUND);
    }
    form.status = status;
    await form.save();
  }

  async terminateBooking(id: string) {
    const booking = await this.formModel.findById({ _id: id });

    if (!booking) {
      throw new HttpException('Booking not found', HttpStatus.NOT_FOUND);
    }
    booking.status = 'TERMINATED';
    await booking.save();
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
