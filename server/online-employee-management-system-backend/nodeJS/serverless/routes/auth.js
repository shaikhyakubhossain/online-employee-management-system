const express = require("express");
const { login, signup } = require("../controllers/auth");

const router = express.Router();

router.post("/employee-login",(req, res) => login(req, res, "employee"));
router.post("/admin-login",(req, res) => login(req, res, "admin"));
router.post("/employee-signup",(req, res) => signup(req, res, "employee"));
router.post("/admin-signup",(req, res) => signup(req, res, "admin"));

module.exports = router;

