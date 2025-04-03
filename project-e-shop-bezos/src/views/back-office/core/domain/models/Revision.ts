class Review {
    review_id: string; // UUID
    product_id: string; // UUID, FK vers Product
    customer_id: string; // UUID, FK vers Customer
    rating: number; // 1-5
    comment?: string; // Nullable
    created_at: Date;
  
    constructor(
      review_id: string,
      product_id: string,
      customer_id: string,
      rating: number,
      created_at: Date,
      comment?: string
    ) {
      this.review_id = review_id;
      this.product_id = product_id;
      this.customer_id = customer_id;
      this.rating = rating;
      this.comment = comment;
      this.created_at = created_at;
    }
  }