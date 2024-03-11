export interface ReglaPrecio {
  es_aplicable(sku: string): boolean;

  calcular_total(cantidad: number, precio: number): number;
}
