const fs = require("fs/promises");
const path = require("path");
const { exec, get } = require("./connection");

const migrationsDir = path.join(__dirname, "migrations");
const seedFile = path.join(__dirname, "seed.sql");

const runSqlFile = async (filePath) => {
  const sql = await fs.readFile(filePath, "utf-8");
  if (!sql.trim()) {
    return;
  }

  await exec(sql);
};

const runMigrations = async () => {
  const files = await fs.readdir(migrationsDir);
  const migrationFiles = files.filter((file) => file.endsWith(".sql")).sort();

  for (const file of migrationFiles) {
    await runSqlFile(path.join(migrationsDir, file));
  }
};

const isSeeded = async () => {
  const row = await get("SELECT COUNT(*) as count FROM orders");
  return row && row.count > 0;
};

const ensureSeedData = async () => {
  if (await isSeeded()) {
    return;
  }

  await runSqlFile(seedFile);
};

const setupDatabase = async () => {
  await runMigrations();
  await ensureSeedData();
};

module.exports = {
  setupDatabase
};
