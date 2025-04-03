class OrderItem {
    order_item_id: string; // UUID
    order_id: string; // UUID, FK vers Order
    variant_id: string; // UUID, FK vers ProductVariant
    quantity: number;
    unit_price: number; // Prix au moment de la commande
    subtotal: number;
  
    constructor(
      order_item_id: string,
      order_id: string,
      variant_id: string,
      quantity: number,
      unit_price: number,
      subtotal: number
    ) {
      this.order_item_id = order_item_id;
      this.order_id = order_id;
      this.variant_id = variant_id;
      this.quantity = quantity;
      this.unit_price = unit_price;
      this.subtotal = subtotal;
    }
  }