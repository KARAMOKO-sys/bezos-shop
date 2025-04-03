class Cart {
    cart_id: string; // UUID
    customer_id: string; // UUID, FK vers Customer
    created_at: Date;
  
    constructor(cart_id: string, customer_id: string, created_at: Date) {
      this.cart_id = cart_id;
      this.customer_id = customer_id;
      this.created_at = created_at;
    }
  }