const router = require("express").Router();
const soundsController = require("../../controllers/soundsController");

router
    .route("/")
    .get(soundsController.findAll)
    .post(soundsController.create);

router
    .route("/:id")
    .get(soundsController.findById)
    .put(soundsController.update)
    .delete(soundsController.remove);

module.exports = router;