"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const tienda_1 = require("./controllers/tienda");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return next();
});
const controladorTienda = new tienda_1.ControladorTienda();
app.get("/api/products/", controladorTienda.controladorProductos.obtener_productos);
app.get("/api/users/", controladorTienda.controladorUsuario.obtener_usuarios);
app.get("/api/shopping_cart/:id", controladorTienda.controladorCarrito.obtener_carrito);
app.post("/api/shopping_cart/:id/add", controladorTienda.controladorCarrito.agregar_items);
app.delete("/api/shopping_cart/:id/remove", controladorTienda.controladorCarrito.remover_items);
app.post("/api/shopping_cart/:id/complete_purchase", controladorTienda.controladorCarrito.completar_compra);
app.get("/health-check", (req, res) => res.sendStatus(200));
app.use("*", (req, res) => {
    res.sendStatus(404);
});
exports.default = app;
