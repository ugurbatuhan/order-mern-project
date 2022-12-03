const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderItemSchema = new Schema({
    quantity: {type: Number},
    price: {type: Number},
})
module.exports = mongoose.model('OrderItem', OrderItemSchema);