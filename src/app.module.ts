import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FormModule } from './form/form.module';

@Module({
  imports: [
    UsersModule,
    FormModule,
    MongooseModule.forRoot(
      'mongodb+srv://sicoarena:Qy1J6M1j42RRV0TF@cluster0.ovwhpk1.mongodb.net/sicoarena',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
