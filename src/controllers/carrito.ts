import { Request, Response } from "express";
import { ControladorTienda } from "./tienda";
import { Producto } from "@models/producto";
import { Item } from "@models/item";

export class ControladorCarrito {
  controladorTienda: ControladorTienda;

  constructor(controladorTienda: ControladorTienda) {
    this.controladorTienda = controladorTienda;
  }

  obtener_carrito = (req: Request, res: Response) => {
    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    res.status(200).json({ data: usuario.carrito });
  };

  agregar_items = (req: Request, res: Response) => {
    const { sku, quantity } = req.body;
    const productos = this.controladorTienda.tienda.productos;

    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    const producto = productos.find((product) => product.sku == sku) || undefined;

    if (!producto) {
      return res
      .status(400)
      .json({ message: "Producto no encontrado" });
    }

    usuario.agregar_item_a_carrito(producto, quantity);
    return res.status(200).json({ data: usuario.carrito });
  };

  remover_items = (req: Request, res: Response) => {
    const { sku } = req.body;

    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    const item =
      usuario.carrito.items.find((item) => item?.producto?.sku == sku) || undefined;

    if (!item) {
      return res
      .status(400)
      .json({ message: "Producto no encontrado" });
    }
    
    usuario.borrar_item_del_carrito(item);
    return res.status(200).json({ data: usuario.carrito });
  };

  completar_compra = (req: Request, res: Response) => {
    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    const venta = this.controladorTienda.tienda.finalizar_compra(usuario);
    return res.status(200).json({ data: venta });
  };
}
