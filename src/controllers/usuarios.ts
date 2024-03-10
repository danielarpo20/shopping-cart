import { Request, Response } from "express";
import { ControladorTienda } from "./tienda";

export class ControladorUsuarios {
  controladorTienda: ControladorTienda;

  constructor(controladorTienda: ControladorTienda) {
    this.controladorTienda = controladorTienda;
  }

  obtener_usuarios(req: Request, res: Response) {}
}
