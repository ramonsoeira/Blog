const router = require("express").Router();

const User = require("../../controllers/user");

router.post("/sign", User.create);

module.exports = router;