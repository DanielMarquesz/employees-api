const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Olha o Macaco");
});

module.exports = router;
