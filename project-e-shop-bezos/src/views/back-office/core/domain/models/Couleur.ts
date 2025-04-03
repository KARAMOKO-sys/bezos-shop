class Color {
    color_id: string; // UUID
    name: string; // Ex: "Rouge", "Bleu marine"
    hex_code: string; // Ex: "#FF0000"
  
    constructor(color_id: string, name: string, hex_code: string) {
      this.color_id = color_id;
      this.name = name;
      this.hex_code = hex_code;
    }
  }