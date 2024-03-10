import { Producto } from "./producto";
import { Carrito } from "./carrito";
import { Item } from "./item";

export class Usuario {
  id: number;
  carrito: Carrito;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.carrito = new Carrito();
    this.name= name;
    this.email= email;
  }

  agregar_item_a_carrito(producto: Producto, cantidad: number) {
    this.carrito.agregar_item(producto, cantidad);
  }

  borrar_item_del_carrito(item: Item) {
    this.carrito.borrar_item(item);
  }
}
