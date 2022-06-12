import ImportDataController from "../controllers/importdata.controller.js";
import express from "express";

const ImportDataRoute = express.Router();

ImportDataRoute.post("/user", ImportDataController.user);

export default ImportDataRoute;
