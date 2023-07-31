const express = require("express");
const router = express.Router();
const authControllers = require("./controllers/auth/authControllers");

router.post("/register", authControllers.postRegister);

router.post("/login", authControllers.postLogin);

module.exports = router;
