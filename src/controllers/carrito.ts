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
    const { sku, quantity } = req.body.value;

    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    const producto =
      this.controladorTienda.tienda.productos.find(
        (product) => product.sku == sku
      ) || ({} as Producto);

    usuario.agregar_item_a_carrito(producto, quantity);

    return res.status(200).json({ data: usuario.carrito });
  };

  remover_items = (req: Request, res: Response) => {
    const { sku } = req.body.value;

    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    const item =
      usuario.carrito.items.find((item) => item.producto.sku == sku) ||
      ({} as Item);

    usuario.borrar_item_del_carrito(item);
    return res.status(200).json({ data: usuario.carrito });
  };

  completar_compra = (req: Request, res: Response) => {
    const usuario = this.controladorTienda.tienda.buscar_usuario(
      Number(req.params.id)
    );
    this.controladorTienda.tienda.finalizar_compra(usuario);
    res.status(200);
  };
}
