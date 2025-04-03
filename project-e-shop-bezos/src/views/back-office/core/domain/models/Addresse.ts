class Addresse {
    address_id: string; // UUID
    street: string;
    city: string;
    postal_code: string;
    country: string;
    is_primary: boolean;
  
    constructor(
      address_id: string,
      street: string,
      city: string,
      postal_code: string,
      country: string,
      is_primary: boolean
    ) {
      this.address_id = address_id;
      this.street = street;
      this.city = city;
      this.postal_code = postal_code;
      this.country = country;
      this.is_primary = is_primary;
    }
  }