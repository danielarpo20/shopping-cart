import { ReglaPrecio } from "../regla-precio";
export class ReglaPrecioEspecial implements ReglaPrecio {
  es_aplicable(sku: string): boolean {
    return sku == "SP";
  }

  calcular_total(cantidad: number, precio: number): number {
    if (cantidad >= 3 && cantidad < 6) {
      return cantidad * precio * 0.8;
    }
    if (cantidad >= 6 && cantidad < 9) {
      return cantidad * precio * 0.6;
    }
    if (cantidad >= 9) {
      return cantidad * precio * 0.5;
    }

    return cantidad * precio;
  }
}
