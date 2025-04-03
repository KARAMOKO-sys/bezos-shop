class CartItem {
    cart_item_id: string; // UUID
    cart_id: string; // UUID, FK vers Cart
    variant_id: string; // UUID, FK vers ProductVariant
    quantity: number;
  
    constructor(cart_item_id: string, cart_id: string, variant_id: string, quantity: number) {
      this.cart_item_id = cart_item_id;
      this.cart_id = cart_id;
      this.variant_id = variant_id;
      this.quantity = quantity;
    }
  }