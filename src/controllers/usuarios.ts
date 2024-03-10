import { Request, Response } from "express";
import { ControladorTienda } from "./tienda";

export class ControladorUsuarios {
  controladorTienda: ControladorTienda;

  constructor(controladorTienda: ControladorTienda) {
    this.controladorTienda = controladorTienda;
  }

  obtener_usuarios = (req: Request, res: Response) => {
    const usuarios = this.controladorTienda.tienda.usuarios;
    res.status(200).json({ data: { usuarios : usuarios } });
  }
}
