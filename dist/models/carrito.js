"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrito = void 0;
const item_1 = require("./item");
class Carrito {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    agregar_item(producto, cantidad) {
        this.items.push(new item_1.Item(producto, cantidad));
        this.total = this.calcular_total();
    }
    borrar_item(item) {
        this.items.map((ele, i) => {
            if (ele.producto.sku == item.producto.sku)
                delete this.items[i];
        });
        this.items = this.items.filter((ele) => ele != null);
        this.total = this.calcular_total();
    }
    calcular_total() {
        return this.items.reduce((acumulador, current) => acumulador + current.calcular_total(), 0);
    }
}
exports.Carrito = Carrito;
