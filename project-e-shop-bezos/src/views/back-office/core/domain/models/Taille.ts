type SizeType = "clothing" | "shoes";

class Size {
  size_id: string; // UUID
  name: string; // Ex: "S", "M", "L"
  size_type: SizeType;

  constructor(size_id: string, name: string, size_type: SizeType) {
    this.size_id = size_id;
    this.name = name;
    this.size_type = size_type;
  }
}