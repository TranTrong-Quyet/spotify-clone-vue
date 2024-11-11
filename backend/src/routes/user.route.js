import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("From user route");
});

export default router;
