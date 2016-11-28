const express = require("express");

const jwtVerifier = require("../auth/jwtVerifier");

const customerController = require("./customerController");

const router = express.Router();
router.use(jwtVerifier);

router.get("", customerController.get);
router.get("/:id", customerController.getById);
router.post("", customerController.saveOrUpdate);
router.put("/:id", customerController.saveOrUpdate);
router.delete("/:id", customerController.remove);

module.exports = router;
