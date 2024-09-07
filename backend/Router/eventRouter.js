const {
  createEvent,
  deleteEvent,
  getEvent,
  getSingleEvent,
} = require("../Controller/eventController");
const upload = require("../services/upload");

const router = require("express").Router();

router.route("/event").post(upload.single("image"), createEvent).get(getEvent);
router.route("/event/:id").delete(deleteEvent).get(getSingleEvent);

module.exports = router;
