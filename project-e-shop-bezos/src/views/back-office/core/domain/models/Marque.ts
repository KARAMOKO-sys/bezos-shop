class Brand {
    brand_id: string; // UUID
    name: string;
    logo_url?: string; // Nullable
  
    constructor(brand_id: string, name: string, logo_url?: string) {
      this.brand_id = brand_id;
      this.name = name;
      this.logo_url = logo_url;
    }
  }