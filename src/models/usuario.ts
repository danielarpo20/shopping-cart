import { Producto } from "./producto";
import { Carrito } from "./carrito";
import { Item } from "./item";

export class Usuario {
  id: number;
  carrito: Carrito;

  constructor(id: number) {
    this.id = id;
    this.carrito = new Carrito();
  }

  agregar_item_a_carrito(producto: Producto, cantidad: number) {
    this.carrito.agregar_item(producto, cantidad);
  }

  borrar_item_del_carrito(item: Item) {
    this.carrito.borrar_item(item);
  }
}
