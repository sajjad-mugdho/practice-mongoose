import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Aplication Route

import userRoute from "./app/modules/users/user.router";

app.use("/api/v1/user", userRoute);

export default app;
