const router = require('express').Router();

const upload = require('../middlewares/multer');

const image  = require("../controllers/imageController");

// router.post("/", user.user);
router.post("/image", upload.single('image'), image.addNew);

module.exports = router;