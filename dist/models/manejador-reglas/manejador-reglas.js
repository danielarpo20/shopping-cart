"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManejadorReglas = void 0;
const regla_precio_normal_1 = require("./reglas/regla-precio-normal");
const regla_precio_especial_1 = require("./reglas/regla-precio-especial");
const regla_precio_por_peso_1 = require("./reglas/regla-precio-por-peso");
class ManejadorReglas {
    constructor() {
        this.reglas = [];
        this.reglas.push(new regla_precio_normal_1.ReglaPrecioNormal());
        this.reglas.push(new regla_precio_especial_1.ReglaPrecioEspecial());
        this.reglas.push(new regla_precio_por_peso_1.ReglaPrecioPeso());
    }
    obtener_regla(sku) {
        if (sku.slice(0, 2) == "EA")
            return this.reglas[0];
        if (sku.slice(0, 2) == "SP")
            return this.reglas[1];
        if (sku.slice(0, 2) == "WE")
            return this.reglas[2];
        return this.reglas[0];
    }
}
exports.ManejadorReglas = ManejadorReglas;
