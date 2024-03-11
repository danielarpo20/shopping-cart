import { Producto } from "./producto";
import { ReglaPrecio } from "./manejador-reglas/regla-precio"
import { ManejadorReglas } from "./manejador-reglas/manejador-reglas";

export class Item {
  cantidad: number;
  producto: Producto;
  regla_precio: ReglaPrecio;
  manejador_reglas: ManejadorReglas;
  total: number;

  constructor(producto: Producto, cantidad: number) {
    this.cantidad = cantidad;
    this.producto = producto;
    this.manejador_reglas = new ManejadorReglas();
    this.regla_precio = this.manejador_reglas.obtener_regla(this.producto.sku);
    this.total = this.regla_precio.calcular_total(this.cantidad, this.producto.precio_unitario);
  }

  calcular_total(): number {
    return this.regla_precio.calcular_total(
      this.cantidad,
      this.producto.precio_unitario
    );
  }
}
