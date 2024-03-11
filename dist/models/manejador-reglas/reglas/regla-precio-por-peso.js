"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReglaPrecioPeso = void 0;
class ReglaPrecioPeso {
    es_aplicable(sku) {
        return sku == "WE";
    }
    calcular_total(cantidad, precio) {
        return cantidad * precio * 1000;
    }
}
exports.ReglaPrecioPeso = ReglaPrecioPeso;
