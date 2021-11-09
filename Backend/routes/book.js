import express from "express";
import book from "../controllers/book.js";

//funcion de express que nos permite manejar las rutas 
const router = express.Router();

//http://localhost:3001/api/role/registerRole  como tal la api ya completa automaticamente la ruta 
router.post("/registerBook", book.registerBook);

export default router;
