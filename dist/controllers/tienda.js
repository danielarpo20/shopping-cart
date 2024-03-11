"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorTienda = void 0;
const carrito_1 = require("./carrito");
const products_1 = require("./products");
const usuarios_1 = require("./usuarios");
const tienda_1 = require("../models/tienda");
class ControladorTienda {
    constructor() {
        this.tienda = new tienda_1.Tienda();
        this.controladorProductos = new products_1.ControladorProductos(this);
        this.controladorCarrito = new carrito_1.ControladorCarrito(this);
        this.controladorUsuario = new usuarios_1.ControladorUsuarios(this);
    }
}
exports.ControladorTienda = ControladorTienda;
