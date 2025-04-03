type OrdreStatus = "pending" | "paid" | "shipped" | "delivered" | "cancelled";

class Order {
  order_id: string; // UUID
  customer_id: string; // UUID, FK vers Customer
  order_date: Date;
  status: OrdreStatus;
  total_amount: number;
  shipping_address_id: string; // UUID, FK vers Address
  billing_address_id: string; // UUID, FK vers Address

  constructor(
    order_id: string,
    customer_id: string,
    order_date: Date,
    status: OrdreStatus,
    total_amount: number,
    shipping_address_id: string,
    billing_address_id: string
  ) {
    this.order_id = order_id;
    this.customer_id = customer_id;
    this.order_date = order_date;
    this.status = status;
    this.total_amount = total_amount;
    this.shipping_address_id = shipping_address_id;
    this.billing_address_id = billing_address_id;
  }
}