"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReglaPrecioNormal = void 0;
class ReglaPrecioNormal {
    es_aplicable(sku) {
        return sku == "EA";
    }
    calcular_total(cantidad, precio) {
        return cantidad * precio;
    }
}
exports.ReglaPrecioNormal = ReglaPrecioNormal;
