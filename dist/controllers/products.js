"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorProductos = void 0;
class ControladorProductos {
    constructor(controladorTienda) {
        this.obtener_productos = (req, res) => {
            const productos = this.controladorTienda.tienda.productos;
            res.status(200).json({ data: productos });
        };
        this.controladorTienda = controladorTienda;
    }
}
exports.ControladorProductos = ControladorProductos;
