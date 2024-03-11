"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReglaPrecioEspecial = void 0;
class ReglaPrecioEspecial {
    es_aplicable(sku) {
        return sku == "SP";
    }
    calcular_total(cantidad, precio) {
        if (cantidad >= 3 && cantidad < 6) {
            return cantidad * precio * 0.8;
        }
        if (cantidad >= 6 && cantidad < 9) {
            return cantidad * precio * 0.6;
        }
        if (cantidad >= 9) {
            return cantidad * precio * 0.5;
        }
        return cantidad * precio;
    }
}
exports.ReglaPrecioEspecial = ReglaPrecioEspecial;
