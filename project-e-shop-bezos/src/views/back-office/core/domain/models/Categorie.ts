class Category {
    category_id: string; // UUID
    name: string;
    parent_category_id?: string; // UUID, nullable
  
    constructor(category_id: string, name: string, parent_category_id?: string) {
      this.category_id = category_id;
      this.name = name;
      this.parent_category_id = parent_category_id;
    }
  }