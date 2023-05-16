import express from "express";
const router = express.Router();
import { createUser, getUserById, getUsers } from "./user.controller";

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
