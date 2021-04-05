const router = require("express").Router();

const { privateData } = require("../controllers/private.example");
const { protect } = require("../middleware/auth");

router.get("/", protect, privateData);

module.exports = router;
