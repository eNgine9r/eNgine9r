const express = require("express");
const crypto = require("crypto");
const {
  createUser,
  findUserByEmail,
  createSession,
  deleteSessionByToken
} = require("../db/queries/auth");
const { hashPassword, verifyPassword } = require("../utils/passwords");

const router = express.Router();

const issueSession = async (user) => {
  const token = crypto.randomBytes(32).toString("hex");
  const sessionId = `sess_${crypto.randomUUID()}`;
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString();

  await createSession({ id: sessionId, userId: user.id, token, expiresAt });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
};

router.post("/auth/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, email, and password are required." });
      return;
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      res.status(409).json({ error: "Email already in use." });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const userId = `user_${crypto.randomUUID()}`;

    await createUser({ id: userId, name, email, hashedPassword });

    const authPayload = await issueSession({ id: userId, name, email });
    res.status(201).json(authPayload);
  } catch (error) {
    next(error);
  }
});

router.post("/auth/login", async (req, res, next) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    const user = await findUserByEmail(email);
    if (!user) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const isValid = await verifyPassword(password, user.hashedPassword);
    if (!isValid) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const authPayload = await issueSession(user);
    res.json(authPayload);
  } catch (error) {
    next(error);
  }
});

router.post("/auth/logout", async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (token) {
      await deleteSessionByToken(token);
    }

    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
