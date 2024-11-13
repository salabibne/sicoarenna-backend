import { Controller, Post, Body, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('initiate')
  async initiatePayment(
    @Body()
    body: {
      amount: number;
      tranId: string;
      customerName: string;
      customerEmail: string;
      customerPhone: string;
      productName: string;
    },
  ) {
    const paymentUrl = await this.paymentService.createInitiatePayment(
      body.amount,
      body.tranId,
      body.customerName,
      body.customerEmail,
      body.customerPhone,
      body.productName,
    );
    return { paymentUrl };
  }
}


