import { Request, Response } from "express";
import { ControladorTienda } from "./tienda";

export class ControladorCarrito {
  controladorTienda: ControladorTienda;

  constructor(controladorTienda: ControladorTienda) {
    this.controladorTienda = controladorTienda;
  }

  obtener_carrito() {}

  agregar_items = (req: Request, res: Response) => {
    const id_usuario = req.params.id;
    const { sku, quantity } = req.body.value;

    const usuarios = this.controladorTienda.tienda;

    //const usuarioInstance = new Usuario();
    //const usuario = usuarioInstance.obtener_usuarios(userId);

    //    const productoInstance = new conto();
    //  const producto = productoInstance.obtener_productos(sku);

    //    this.tienda.agregar_producto_a_carrito(usuario, producto, quantity);

    const response = {};
    return res.status(200).json({ data: response });
  };

  remover_items() {}

  completar_compra() {}
}
