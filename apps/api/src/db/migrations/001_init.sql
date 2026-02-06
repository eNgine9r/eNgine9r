CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  currency TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  total REAL NOT NULL,
  currency TEXT NOT NULL,
  ordered_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS ad_spend (
  id TEXT PRIMARY KEY,
  channel TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT NOT NULL,
  spend_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS expenses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT NOT NULL,
  cadence TEXT NOT NULL,
  type TEXT NOT NULL,
  effective_month TEXT,
  incurred_on TEXT
);
