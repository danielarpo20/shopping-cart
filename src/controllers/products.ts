import { Request, Response } from "express";
import { ControladorTienda } from "./tienda";

export class ControladorProductos {
  controladorTienda: ControladorTienda;

  constructor(controladorTienda: ControladorTienda) {
    this.controladorTienda = controladorTienda;
  }

  obtener_productos = (req: Request, res: Response) => {
    const productos = this.controladorTienda.tienda.productos;
    res.status(200).json({ data: productos });
  };
}
