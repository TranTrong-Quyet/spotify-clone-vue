import { Router } from "express";
import { getAllSong, getMadeForYouSongs } from "../controller/song.controller";
import { protectRoute, requireAdmin } from "../../middleware/auth.middleware";

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSong);
router.get("/featured", getFeatureSongs);
router.get("/made-for-you", getMadeForYouSongs);

router.get("/trending", getTrendingSongs);

export default router;
