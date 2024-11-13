import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PaymentService {
  private sslcommerzApi = 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

  private storeid = 'sicoa6731d1b92a239';

  private storepass = 'sicoa6731d1b92a239@ssl';

  public curr = 'BDT';
  public productCategory = 'SlotBooking';
  public emiOption = 0;
  public customerAddress = 'MerulBadda';
  public customerCity = 'Dhaka';
  public customerPostCode = '1212';
  public customerCountry = 'Bangladesh';
  public shippingMethod = 'No';
  public product_category = 'BookingTicket';
  public product_profile = 'general';
  // public successUrl = 'http://localhost:5173/payment/success';
  public successUrl = 'https://www.youtube.com/watch?v=z8sxaUw_f-M&t=125s';
  public failUrl = 'http://localhost:5173/payment/fail';
  public cancelUrl = 'http://localhost:5173/payment/cancel';

  async createInitiatePayment(
    amount: number,
    tranId: string,
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    productName: string,
  ) {
    const paymentData = {
      store_id: this.storeid,
      store_passwd: this.storepass,
      total_amount: amount,
      tran_id: tranId,
      success_url: this.successUrl,
      fail_url: this.failUrl,
      cancel_url: this.cancelUrl,
      cus_name: customerName,
      cus_email: customerEmail,
      cus_add1: this.customerAddress,
      cus_city: this.customerCity,
      cus_postcode: this.customerPostCode,
      cus_country: this.customerCountry,
      cus_phone: customerPhone,
      shipping_method: this.shippingMethod,
      product_name: productName,
      product_category: this.product_category,
      product_profile: this.product_profile,
    };

    //   hit the SSlCOMERZ for getting the GateWaypageURL

    // try {
    //   const responseFromTheSSL = await axios.post(
    //     this.sslcommerzApi,
    //     paymentData,
    //   );

    //   console.log('responseFromThe_SSl', responseFromTheSSL);
    //   console.log('payment data', paymentData);
    //   return responseFromTheSSL.data.GatewayPageURL;
    // }
    try {
      const responseFromTheSSL = await axios.post(
        this.sslcommerzApi,
        new URLSearchParams({
          ...paymentData,
          total_amount: paymentData.total_amount.toString(),
        }).toString(), // Ensure data is sent as x-www-form-urlencoded
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      console.log('responseFromThe_SSl', responseFromTheSSL.data);
      return responseFromTheSSL.data.GatewayPageURL;
    } catch (error) {
      console.log('error', error);
    }
  }
}
