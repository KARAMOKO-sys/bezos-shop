class Variante {
    variant_id: string; // UUID
    product_id: string; // UUID, FK vers Product
    size_id: string; // UUID, FK vers Size
    color_id: string; // UUID, FK vers Color
    sku: string; // Unique
    price_modifier: number; // Ex: +5€ pour XL
    stock_quantity: number;
  
    constructor(
      variant_id: string,
      product_id: string,
      size_id: string,
      color_id: string,
      sku: string,
      price_modifier: number,
      stock_quantity: number
    ) {
      this.variant_id = variant_id;
      this.product_id = product_id;
      this.size_id = size_id;
      this.color_id = color_id;
      this.sku = sku;
      this.price_modifier = price_modifier;
      this.stock_quantity = stock_quantity;
    }
  }