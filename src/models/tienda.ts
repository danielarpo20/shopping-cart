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
    this.usuarios.push(new Usuario(this.usuarios.length + 1, "Paul", "paul@gmail.com"));

    this.productos = [];
    this.productos.push(
      new Producto("WE1", "1 KG Tomates", "Tomate de aliño", 5, 5),
      new Producto("WE2", "1 KG Cebollas", "Cebolla Rama", 5, 9),
      new Producto("WE3", "1 KG Lechuga", "Lechuga Fresca", 5, 6),
      new Producto("EA1", "Pescado", "Pescado Fresco", 5, 10000),
      new Producto("EA2", "Pollo", "Pechuga de Pollo", 5, 5000),
      new Producto("EA3", "Carne", "Carne rico", 5, 12000),
      new Producto("SP1", "Arroz", "Arroz Diana", 5, 2000),
      new Producto("SP2", "Crema dental", "Colgate", 5, 7000),
      new Producto("SP3", "Cepillo de dientes", "Pro", 5, 6000)
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

  finalizar_compra(usuario: Usuario): Item[]{
    const items_no_disponible: Item[] = [];

    // Comprobar si todos los items están disponibles
    usuario.carrito.items.map((item) => {
      if (!item.producto.tiene_unidades(item.cantidad)){
        items_no_disponible.push(item)
      }
    });

    // Si alguno items no están disponibles, devuélvalos.
    if(items_no_disponible.length > 0){
      return items_no_disponible;
    }

    // Descontar unidades
    usuario.carrito.items.map((item) => {
        item.producto.descontar_unidades(item.cantidad);
        // Calcular total ventas
        this.totalVentas += usuario.carrito.calcular_total();
        // Limpiar carro
        usuario.carrito.items = [];
    });
    
    return [];
  }

  buscar_usuario(id_usuario: number): Usuario {
    return (
      this.usuarios.find((usuario) => usuario.id == id_usuario) ||
      ({} as Usuario)
    );
  }

  limpiar_carrito(usuario: Usuario) {
    usuario.carrito.items = [];
    usuario.carrito.total = 0;
    return usuario.carrito;
  }
}
