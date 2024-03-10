import { ControladorCarrito } from "./carrito";
import { ControladorProductos } from "./products";
import { ControladorUsuarios } from "./usuarios";
import { Tienda } from "@models/tienda";

export class ControladorTienda {
  tienda: Tienda;
  controladorProductos: ControladorProductos;
  controladorCarrito: ControladorCarrito;
  controladorUsuario: ControladorUsuarios;

  constructor() {
    this.tienda = new Tienda();
    this.controladorProductos = new ControladorProductos(this);
    this.controladorCarrito = new ControladorCarrito(this);
    this.controladorUsuario = new ControladorUsuarios(this);
  }
}
