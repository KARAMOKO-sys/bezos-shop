class Promotion {
    promotion_id: string; // UUID
    name: string;
    discount_percent: number;
    start_date: Date;
    end_date: Date;
    is_active: boolean;
  
    constructor(
      promotion_id: string,
      name: string,
      discount_percent: number,
      start_date: Date,
      end_date: Date,
      is_active: boolean
    ) {
      this.promotion_id = promotion_id;
      this.name = name;
      this.discount_percent = discount_percent;
      this.start_date = start_date;
      this.end_date = end_date;
      this.is_active = is_active;
    }
  }