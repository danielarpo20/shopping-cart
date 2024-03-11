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
        this.productos = [];
        this.productos.push(new producto_1.Producto("WE1", "Tomates", "Tomate de aliño", 5, 500), new producto_1.Producto("WE2", "Cebollas", "Cebolla Rama", 5, 500), new producto_1.Producto("WE3", "lechuga", "Lechuga Fresca", 5, 500), new producto_1.Producto("EA1", "Pescado", "Pescado Fresco", 5, 500), new producto_1.Producto("EA2", "Pollo", "Pechuga de Pollo", 5, 500), new producto_1.Producto("SP1", "Arroz", "Arroz Diana", 5, 500), new producto_1.Producto("SP2", "Crema dental", "Colgate", 5, 500), new producto_1.Producto("SP3", "Cepillo de dientes", "Pro", 5, 500));
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
        usuario.carrito.items.map((item) => {
            item.producto.descontar_unidades(item.cantidad);
        });
        this.totalVentas += usuario.carrito.calcular_total();
        usuario.carrito.items = [];
        return this.totalVentas;
    }
    buscar_usuario(id_usuario) {
        return (this.usuarios.find((usuario) => usuario.id == id_usuario) ||
            {});
    }
}
exports.Tienda = Tienda;
