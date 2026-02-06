const { findSessionByToken, deleteSessionByToken } = require("../db/queries/auth");

const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const session = await findSessionByToken(token);
    if (!session) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    if (new Date(session.expiresAt) <= new Date()) {
      await deleteSessionByToken(token);
      res.status(401).json({ error: "Session expired" });
      return;
    }

    req.user = {
      id: session.userId,
      name: session.name,
      email: session.email
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  requireAuth
};
