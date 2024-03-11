"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(sku, nombre, descripcion, unidades_disponibles, precio_unitario) {
        this.sku = sku;
        this.nombre = nombre;
        this.description = descripcion;
        this.unidades_disponibles = unidades_disponibles;
        this.precio_unitario = precio_unitario;
    }
    tiene_unidades(cantidad) {
        return this.unidades_disponibles >= cantidad;
    }
    descontar_unidades(cantidad) {
        this.unidades_disponibles -= cantidad;
    }
}
exports.Producto = Producto;
