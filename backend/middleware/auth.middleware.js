import { clerkClient } from "@clerk/express";

const protectRoute = (req, res, next) => {
  if (!req.auth.userId) {
    res.status(401).json({ message: "Unauthorized, you must be logged in" });
    return;
  }
  next();
};

const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized, You must be an admin" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

export { protectRoute, requireAdmin };
