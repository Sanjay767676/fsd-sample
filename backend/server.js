const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
