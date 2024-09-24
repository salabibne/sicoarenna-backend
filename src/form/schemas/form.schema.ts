// src/events/schemas/event.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FormData extends Document {
  // @Prop({ required: true })
  // sportsCategory: string;

  // @Prop({ required: true })
  // person: string;

  // @Prop({ required: true })
  // date: Date;

  // @Prop({ required: true })
  // time: string;

  // @Prop({ required: true })
  // place: string;

  // @Prop({ required: true })
  // name: string;

  // @Prop({ required: true })
  // email: string;

  // @Prop({ required: true })
  // pn: string;
  @Prop({ type: { sportsCategory: String, person: String }, required: true })
  sportsAndPerson: {
    sportsCategory: string;
    person: string;
  };

  @Prop({ type: { date: Date, time: String, place: String }, required: true })
  dateAndtime: {
    date: Date;
    time: string;
    place: string;
  };

  @Prop({ type: { name: String, email: String, pn: String }, required: true })
  personalInformation: {
    name: string;
    email: string;
    pn: string;
  };
}

export const FormSchema = SchemaFactory.createForClass(FormData);
