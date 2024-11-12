import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("From song route");
});

export default router;
