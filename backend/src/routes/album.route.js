import { Router } from "express";
import { id, firstName, lastName } from "@clerk/express";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:alBumId", getAlbumsById);

export default router;
