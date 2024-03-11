import { ReglaPrecio } from "../regla-precio";
export class ReglaPrecioNormal implements ReglaPrecio {
  es_aplicable(sku: string): boolean {
    return sku == "EA";
  }

  calcular_total(cantidad: number, precio: number): number {
    return cantidad * precio;
  }
}
