// const { login, logout, signup } = require("../controllers/loginservice");
// const { validateRequest } = require("../../../utils/validateRequest");

const router = require("express").Router();

router.post("/login", validateRequest, login);
router.post("/logout", validateRequest, logout);
router.post("/signup", signup)

module.exports = router;
