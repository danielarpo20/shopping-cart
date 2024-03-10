class ManejadorReglas {
  reglas: ReglaPrecio[];

  constructor() {
    this.reglas = [];
    this.reglas.push(new ReglaPrecioNormal());
    this.reglas.push(new ReglaPrecioEspecial());
    this.reglas.push(new ReglaPrecioPeso());
  }

  obtener_regla(sku: string): ReglaPrecio {
    if (sku.slice(0, 2) == "EA") return this.reglas[0];
    if (sku.slice(0, 2) == "SP") return this.reglas[1];
    if (sku.slice(0, 2) == "WE") return this.reglas[2];
    return this.reglas[0];
  }
}
