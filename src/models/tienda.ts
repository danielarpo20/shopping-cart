import { Producto } from "./producto";
import { Usuario } from "./usuario";
import { Item } from "./item";

export class Tienda {
  totalVentas: number;
  usuarios: Usuario[];
  productos: Producto[];

  constructor() {
    this.totalVentas = 0;
    this.usuarios = [];
    this.usuarios.push(new Usuario(this.usuarios.length + 1));

    this.productos = [];
    this.productos.push(
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("EA1", "Tomates", "Tomate de aliño", 5, 500)
    );
  }

  agregar_producto_a_carrito(
    usuario: Usuario,
    producto: Producto,
    cantidad: number
  ) {
    const producto_disponible = producto.tiene_unidades(cantidad);
    if (!producto_disponible)
      console.log("No suficientes unidades disponibles");

    usuario.agregar_item_a_carrito(producto, cantidad);
  }

  eliminar_item_del_carrito(usuario: Usuario, item: Item) {
    usuario.borrar_item_del_carrito(item);
  }

  finalizar_compra(usuario: Usuario) {
    // Descontar unidades
    usuario.carrito.items.map((item) => {
      item.producto.descontar_unidades(item.cantidad);
    });

    // Calcular total ventas
    this.totalVentas += usuario.carrito.calcular_total();

    // Limpiar carro
    usuario.carrito.items = [];
  }
}
