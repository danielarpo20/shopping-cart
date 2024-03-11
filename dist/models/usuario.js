"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const carrito_1 = require("./carrito");
class Usuario {
    constructor(id, name, email) {
        this.id = id;
        this.carrito = new carrito_1.Carrito();
        this.name = name;
        this.email = email;
    }
    agregar_item_a_carrito(producto, cantidad) {
        this.carrito.agregar_item(producto, cantidad);
    }
    borrar_item_del_carrito(item) {
        this.carrito.borrar_item(item);
    }
}
exports.Usuario = Usuario;
