type PaymentMethod = "credit_card" | "paypal" | "stripe";
type PaymentStatus = "pending" | "completed" | "failed";

class Payment {
  payment_id: string; // UUID
  order_id: string; // UUID, FK vers Order
  amount: number;
  payment_method: PaymentMethod;
  transaction_id: string;
  status: PaymentStatus;
  payment_date: Date;

  constructor(
    payment_id: string,
    order_id: string,
    amount: number,
    payment_method: PaymentMethod,
    transaction_id: string,
    status: PaymentStatus,
    payment_date: Date
  ) {
    this.payment_id = payment_id;
    this.order_id = order_id;
    this.amount = amount;
    this.payment_method = payment_method;
    this.transaction_id = transaction_id;
    this.status = status;
    this.payment_date = payment_date;
  }
}