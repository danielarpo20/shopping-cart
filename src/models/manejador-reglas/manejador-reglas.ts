import { ReglaPrecioNormal } from "./reglas/regla-precio-normal";
import { ReglaPrecioEspecial } from "./reglas/regla-precio-especial";
import { ReglaPrecioPeso } from "./reglas/regla-precio-por-peso";
import { ReglaPrecio } from "./regla-precio";
export class ManejadorReglas {
  reglas: ReglaPrecio[];

  constructor() {
    this.reglas = [];
    this.reglas.push(new ReglaPrecioNormal());
    this.reglas.push(new ReglaPrecioEspecial());
    this.reglas.push(new ReglaPrecioPeso());
  }

  obtener_regla(sku: string): ReglaPrecio {
    for (const regla of this.reglas) {
      if (regla.es_aplicable(sku.slice(0,2))) return regla;
    }

    return this.reglas[0];
  }
}
