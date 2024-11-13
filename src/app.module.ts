import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { FormModule } from './form/form.module';
import { UsersModule } from './users/users.module';
import { SportsServiceModule } from './sports-service/sports-service.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    UsersModule,
    FormModule,
    MongooseModule.forRoot(
      // 'mongodb+srv://sicoarena:Qy1J6M1j42RRV0TF@cluster0.ovwhpk1.mongodb.net/sicoarena',
      'mongodb+srv://sicoarena:16MhXpiIOW5LMoKr@cluster0.ovwhpk1.mongodb.net/sicoarena',
    ),
    UsersModule,
    SportsServiceModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
