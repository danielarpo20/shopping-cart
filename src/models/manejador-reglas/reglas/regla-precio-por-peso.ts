import { ReglaPrecio } from "../regla-precio";
export class ReglaPrecioPeso implements ReglaPrecio {
  es_aplicable(sku: string): boolean {
    return sku == "WE";
  }

  calcular_total(cantidad: number, precio: number): number {
    return cantidad * precio * 1000;
  }
}
