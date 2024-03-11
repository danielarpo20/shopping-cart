"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorUsuarios = void 0;
class ControladorUsuarios {
    constructor(controladorTienda) {
        this.obtener_usuarios = (req, res) => {
            const usuarios = this.controladorTienda.tienda.usuarios;
            res.status(200).json({ data: { usuarios: usuarios } });
        };
        this.controladorTienda = controladorTienda;
    }
}
exports.ControladorUsuarios = ControladorUsuarios;
