import express from "express";
import dotenv from "dotenv";
import path from "path";

import userRoutes from "./routes/user.route.js";
import authRouters from "./routes/auth.route.js";
import albumRouters from "./routes/auth.route.js";
import adminRouters from "./routes/auth.route.js";
import songRouters from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
app.use(express.json());
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB max file
    },
  })
);

const PORT = process.env.PORT;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRouters);
app.use("/api/albums", albumRouters);
app.use("/api/admin", adminRouters);
app.use("/api/songs", songRouters);

// error handler
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Internal server error",
    });
});

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
  connectDB();
});
