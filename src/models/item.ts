import { Producto } from "./producto";

export class Item {
  cantidad: number;
  producto: Producto;
  manejador_reglas: ManejadorReglas;
  regla_precio: ReglaPrecio;

  constructor(producto: Producto, cantidad: number) {
    this.cantidad = cantidad;
    this.producto = producto;
    this.manejador_reglas = new ManejadorReglas();
    this.regla_precio = this.manejador_reglas.obtener_regla(this.producto.sku);
  }

  calcular_total(): number {
    return this.regla_precio.calcular_total(
      this.cantidad,
      this.producto.precio_unitario
    );
  }
}
