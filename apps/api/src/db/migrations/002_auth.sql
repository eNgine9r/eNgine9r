ALTER TABLE users ADD COLUMN hashed_password TEXT;

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

UPDATE users
SET hashed_password = 'seeded-salt:575bc12c7a0214ebfe610969c4121e72faede66e244754f0a036fdb0810bf8ef20e9d1e483f853febd0ddf8b4cd806f8583c3543f4ace2d338103e1204e78e12'
WHERE hashed_password IS NULL OR hashed_password = '';
