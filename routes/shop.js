const express = require("express");
const path = require("path");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.post("/products", shopController.getProduct);

router.post("/cart", shopController.getCart);

router.post("/checkout", shopController.getCheckout);

module.exports = router;
