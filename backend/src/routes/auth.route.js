import { Router } from "express";
import { User } from "../models/user.model.js";
import { authCallback } from "../controller/auth.controller.js";

const router = Router();

router.get("/", authCallback);

export default router;
