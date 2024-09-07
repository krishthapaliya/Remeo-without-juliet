const { userRegistration } = require("../Controller/userController");

const router = require("express").Router();

router.route("/register").post(userRegistration);

module.exports = router;
