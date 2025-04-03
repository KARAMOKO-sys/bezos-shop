class Produit {
    product_id: string; // UUID
    category_id: string; // Foreign Key vers Category (UUID)
    brand_id: string; // Foreign Key vers Brand (UUID)
    name: string;
    description?: string; // Optional (peut être null ou undefined)
    base_price: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      product_id: string,
      category_id: string,
      brand_id: string,
      name: string,
      base_price: number,
      is_active: boolean,
      created_at: Date,
      updated_at: Date,
      description?: string
    ) {
      this.product_id = product_id;
      this.category_id = category_id;
      this.brand_id = brand_id;
      this.name = name;
      this.description = description;
      this.base_price = base_price;
      this.is_active = is_active;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }