export class Producto {
  sku: string;
  nombre: string;
  description: string;
  unidades_disponibles: number;
  precio_unitario: number;

  constructor(
    sku: string,
    nombre: string,
    descripcion: string,
    unidades_disponibles: number,
    precio_unitario: number
  ) {
    this.sku = sku;
    this.nombre = nombre;
    this.description = descripcion;
    this.unidades_disponibles = unidades_disponibles;
    this.precio_unitario = precio_unitario;
  }

  tiene_unidades(cantidad: number): boolean {
    return this.unidades_disponibles >= cantidad;
  }

  descontar_unidades(cantidad: number) {
    this.unidades_disponibles -= cantidad;
  }
}
