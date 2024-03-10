import bodyParser from "body-parser";
import cors from "cors";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import { ControladorProductos } from "./controllers/products";
import { ControladorTienda } from "./controllers/tienda";

const app: express.Application = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// eslint-disable-next-line @typescript-eslint/ban-types
app.use((req: Request, res: Response, next: Function) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  return next();
});

const controladorTienda = new ControladorTienda();
//const controladorProductos = new ControladorProductos(controladorTienda);

// Products
app.get("/api/products/", controladorTienda.controladorProductos.obtener_productos);

// Users
//app.get("/api/users/", getUsers);

// Shopping cart
//app.get("/api/shopping_cart/:id", getShoppingCart);
//app.post("/api/shopping_cart/:id/add", addProduct);
//app.post("/api/shopping_cart/:id/remove", removeProduct);
//app.post("/api/shopping_cart/:id/complete_purchase", completePurchase);

app.get("/health-check", (req, res) => res.sendStatus(200));

app.use("*", (req, res) => {
  res.sendStatus(404);
});

export default app;
