import { Producto } from "./producto";
import { Item } from "./item";

export class Carrito {
  items: Item[];

  constructor() {
    this.items = [];
  }

  agregar_item(producto: Producto, cantidad: number) {
    this.items.push(new Item(producto, cantidad));
  }

  borrar_item(item: Item) {
    this.items.map((ele, i) => {
      if (ele.producto.sku == item.producto.sku) delete this.items[i];
    });
  }

  calcular_total(): number {
    return this.items.reduce(
      (acumulador, current) => acumulador + current.calcular_total(),
      0
    );
  }
}
