import { Producto } from "./producto";
import { Item } from "./item";

export class Carrito {
  items: Item[];
  total: number;

  constructor() {
    this.items = [];
    this.total = 0;
  }

  agregar_item(producto: Producto, cantidad: number) {
    this.items.push(new Item(producto, cantidad));
    this.total = this.calcular_total();
  }

  borrar_item(item: Item) {
    this.items.map((ele, i) => {
      if (ele.producto.sku == item.producto.sku) delete this.items[i];
    })

    this.items = this.items.filter((ele) => ele != null);
    this.total = this.calcular_total();
  }

  calcular_total(): number {
    return this.items.reduce(
      (acumulador, current) => acumulador + current.calcular_total(),
      0
    );
  }
}
