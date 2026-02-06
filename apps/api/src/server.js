const app = require("./app");
const { setupDatabase } = require("./db/setup");

const PORT = process.env.PORT || 4000;

setupDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database", error);
    process.exit(1);
  });
