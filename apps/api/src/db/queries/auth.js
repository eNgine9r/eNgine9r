const { get, run } = require("../connection");

const findUserByEmail = (email) =>
  get(
    "SELECT id, name, email, hashed_password as hashedPassword FROM users WHERE email = ?",
    [email]
  );

const createUser = ({ id, name, email, hashedPassword }) =>
  run("INSERT INTO users (id, name, email, hashed_password) VALUES (?, ?, ?, ?)", [
    id,
    name,
    email,
    hashedPassword
  ]);

const createSession = ({ id, userId, token, expiresAt }) =>
  run(
    "INSERT INTO sessions (id, user_id, token, expires_at) VALUES (?, ?, ?, ?)",
    [id, userId, token, expiresAt]
  );

const findSessionByToken = (token) =>
  get(
    `SELECT sessions.id, sessions.user_id as userId, sessions.expires_at as expiresAt,
            users.name as name, users.email as email
     FROM sessions
     JOIN users ON users.id = sessions.user_id
     WHERE sessions.token = ?`,
    [token]
  );

const deleteSessionByToken = (token) =>
  run("DELETE FROM sessions WHERE token = ?", [token]);

module.exports = {
  findUserByEmail,
  createUser,
  createSession,
  findSessionByToken,
  deleteSessionByToken
};
