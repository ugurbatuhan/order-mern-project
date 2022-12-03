const express = require("express");
const router = express.Router();

const orderController = require("../middleware/OrderController")
router.post("/createOrderItem",orderController.createOrderItem);
router.post("/updateOrderItem", orderController.updateOrderItem);
router.post("/deleteOrderItem", orderController.deleteOrderItem);
router.post("/createOrder",orderController.createOrder);
router.get("/getAllOrder", orderController.getAllOrders);
router.post("/updateOrder", orderController.updateOrder);
router.post("/deleteOrder", orderController.deleteOrder);
router.get("/getAllOrderItems", orderController.getAllOrderItems);

module.exports = router