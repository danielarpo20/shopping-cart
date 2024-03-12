"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorCarrito = void 0;
class ControladorCarrito {
    constructor(controladorTienda) {
        this.obtener_carrito = (req, res) => {
            const usuario = this.controladorTienda.tienda.buscar_usuario(Number(req.params.id));
            res.status(200).json({ data: usuario.carrito });
        };
        this.agregar_items = (req, res) => {
            const { sku, quantity } = req.body;
            const productos = this.controladorTienda.tienda.productos;
            const usuario = this.controladorTienda.tienda.buscar_usuario(Number(req.params.id));
            const producto = productos.find((product) => product.sku == sku) || undefined;
            if (!producto) {
                return res.status(400).json({ message: "Producto no encontrado" });
            }
            this.controladorTienda.tienda.agregar_producto_a_carrito(usuario, producto, quantity);
            return res.status(200).json({ data: usuario.carrito });
        };
        this.remover_items = (req, res) => {
            const { sku } = req.body;
            const usuario = this.controladorTienda.tienda.buscar_usuario(Number(req.params.id));
            const item = usuario.carrito.items.find((item) => { var _a; return ((_a = item === null || item === void 0 ? void 0 : item.producto) === null || _a === void 0 ? void 0 : _a.sku) == sku; }) ||
                undefined;
            if (!item) {
                return res.status(400).json({ message: "Producto no encontrado" });
            }
            this.controladorTienda.tienda.eliminar_item_del_carrito(usuario, item);
            return res.status(200).json({ data: usuario.carrito });
        };
        this.completar_compra = (req, res) => {
            const usuario = this.controladorTienda.tienda.buscar_usuario(Number(req.params.id));
            const items = this.controladorTienda.tienda.finalizar_compra(usuario);
            return res.status(200).json({ data: items });
        };
        this.limpiar_carrito = (req, res) => {
            const usuario = this.controladorTienda.tienda.buscar_usuario(Number(req.params.id));
            const items = usuario.carrito.items;
            if (items.length === 0) {
                return res.status(400).json({ message: "Carrito vacío" });
            }
            this.controladorTienda.tienda.limpiar_carrito(usuario);
            return res.status(200).json({ data: usuario.carrito });
        };
        this.controladorTienda = controladorTienda;
    }
}
exports.ControladorCarrito = ControladorCarrito;
