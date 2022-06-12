import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";
import connectDB from "./config/mongodb.js";
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 1304;

routes(app);

app.listen(port, () => {
    console.log(`HA dApp Backend listening at http://127.0.0.1:${port}/`);
});
