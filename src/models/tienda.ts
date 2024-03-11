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
    this.usuarios.push(new Usuario(this.usuarios.length + 1, "Juan", "juan@gmail.com"));

    this.productos = [];
    this.productos.push(
      new Producto("WE1", "Tomates", "Tomate de aliño", 5, 500),
      new Producto("WE2", "Cebollas", "Cebolla Rama", 5, 500),
      new Producto("WE3", "lechuga", "Lechuga Fresca", 5, 500),
      new Producto("EA1", "Pescado", "Pescado Fresco", 5, 500),
      new Producto("EA2", "Pollo", "Pechuga de Pollo", 5, 500),
      new Producto("SP1", "Arroz", "Arroz Diana", 5, 500),
      new Producto("SP2", "Crema dental", "Colgate", 5, 500),
      new Producto("SP3", "Cepillo de dientes", "Pro", 5, 500)
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

  finalizar_compra(usuario: Usuario) : number {
    // Descontar unidades
    usuario.carrito.items.map((item) => {
      item.producto.descontar_unidades(item.cantidad);
    });

    // Calcular total ventas
    this.totalVentas += usuario.carrito.calcular_total();

    // Limpiar carro
    usuario.carrito.items = [];
    return this.totalVentas;
  }

  buscar_usuario(id_usuario: number): Usuario {
    return (
      this.usuarios.find((usuario) => usuario.id == id_usuario) ||
      ({} as Usuario)
    );
  }
}
