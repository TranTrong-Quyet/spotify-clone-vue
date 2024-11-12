import { Router } from "express";

import { protectRoute } from "../../middleware/auth.middleware.js";
import { createSong, deleteSong } from "../controller/admin.controller.js";

const router = Router();

router.post("/songs", protectRoute, createSong);
router.delete("/songs/:id", protectRoute, deleteSong);

export default router;
