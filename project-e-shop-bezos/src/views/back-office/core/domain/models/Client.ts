/*
class Client extends User implements BaseEntity {
    customer_id: string; // UUID, FK vers User
    address_id: string; // UUID, FK vers Address
    birth_date?: Date; // Nullable
    loyalty_points: number;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      user_id: string,
      email: string,
      password_hash: string,
      first_name: string,
      last_name: string,
      is_active: boolean,
      is_staff: boolean,
      date_joined: Date,
      customer_id: string,
      address_id: string,
      loyalty_points: number,
      phone?: string,
      last_login?: Date,
      birth_date?: Date,
      created_at: Date = new Date(),
      updated_at: Date = new Date()
    ) {
      super(user_id, email, password_hash, first_name, last_name, is_active, is_staff, date_joined, phone, last_login);
      this.customer_id = customer_id;
      this.address_id = address_id;
      this.birth_date = birth_date;
      this.loyalty_points = loyalty_points;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  
    // Méthode pour incrémenter les points de fidélité
    addLoyaltyPoints(points: number): void {
      this.loyalty_points += points;
      //this.updateTimestamp(); // Met à jour la date de mise à jour
    }
  }
    */