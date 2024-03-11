"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const manejador_reglas_1 = require("./manejador-reglas/manejador-reglas");
class Item {
    constructor(producto, cantidad) {
        this.cantidad = cantidad;
        this.producto = producto;
        this.manejador_reglas = new manejador_reglas_1.ManejadorReglas();
        this.regla_precio = this.manejador_reglas.obtener_regla(this.producto.sku);
        this.total = this.regla_precio.calcular_total(this.cantidad, this.producto.precio_unitario);
    }
    calcular_total() {
        return this.regla_precio.calcular_total(this.cantidad, this.producto.precio_unitario);
    }
}
exports.Item = Item;
