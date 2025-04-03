class Utilisateur {
    user_id: string; // UUID
    email: string; // Unique
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string; // Optional (peut être null ou undefined)
    is_active: boolean;
    is_staff: boolean;
    date_joined: Date;
    last_login?: Date; // Optional (peut être null ou undefined)
  
    constructor(
      user_id: string,
      email: string,
      password_hash: string,
      first_name: string,
      last_name: string,
      is_active: boolean,
      is_staff: boolean,
      date_joined: Date,
      phone?: string,
      last_login?: Date
    ) {
      this.user_id = user_id;
      this.email = email;
      this.password_hash = password_hash;
      this.first_name = first_name;
      this.last_name = last_name;
      this.phone = phone;
      this.is_active = is_active;
      this.is_staff = is_staff;
      this.date_joined = date_joined;
      this.last_login = last_login;
    }
  }