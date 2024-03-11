"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tienda = void 0;
const producto_1 = require("./producto");
const usuario_1 = require("./usuario");
class Tienda {
    constructor() {
        this.totalVentas = 0;
        this.usuarios = [];
        this.usuarios.push(new usuario_1.Usuario(this.usuarios.length + 1, "Juan", "juan@gmail.com"));
        this.usuarios.push(new usuario_1.Usuario(this.usuarios.length + 1, "Paul", "paul@gmail.com"));
        this.productos = [];
        this.productos.push(new producto_1.Producto("WE1", "1 KG Tomates", "Tomate de aliño", 5, 5), new producto_1.Producto("WE2", "1 KG Cebollas", "Cebolla Rama", 5, 9), new producto_1.Producto("WE3", "1 KG Lechuga", "Lechuga Fresca", 5, 6), new producto_1.Producto("EA1", "Pescado", "Pescado Fresco", 5, 10000), new producto_1.Producto("EA2", "Pollo", "Pechuga de Pollo", 5, 5000), new producto_1.Producto("EA3", "Carne", "Carne rico", 5, 12000), new producto_1.Producto("SP1", "Arroz", "Arroz Diana", 5, 2000), new producto_1.Producto("SP2", "Crema dental", "Colgate", 5, 7000), new producto_1.Producto("SP3", "Cepillo de dientes", "Pro", 5, 6000));
    }
    agregar_producto_a_carrito(usuario, producto, cantidad) {
        const producto_disponible = producto.tiene_unidades(cantidad);
        if (!producto_disponible)
            console.log("No suficientes unidades disponibles");
        usuario.agregar_item_a_carrito(producto, cantidad);
    }
    eliminar_item_del_carrito(usuario, item) {
        usuario.borrar_item_del_carrito(item);
    }
    finalizar_compra(usuario) {
        const items_no_disponible = [];
        usuario.carrito.items.map((item) => {
            if (!item.producto.tiene_unidades(item.cantidad)) {
                items_no_disponible.push(item);
            }
        });
        if (items_no_disponible.length > 0) {
            return items_no_disponible;
        }
        usuario.carrito.items.map((item) => {
            item.producto.descontar_unidades(item.cantidad);
            this.totalVentas += usuario.carrito.calcular_total();
            usuario.carrito.items = [];
        });
        return [];
    }
    buscar_usuario(id_usuario) {
        return (this.usuarios.find((usuario) => usuario.id == id_usuario) ||
            {});
    }
}
exports.Tienda = Tienda;
