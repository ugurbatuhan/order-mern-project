const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    orderDate: {type: Date},
    soldTo: {type: Schema.Types.ObjectId, ref: 'Person'},
    billTo: {type: Schema.Types.ObjectId, ref: 'Person'},
    shipTo: {type: Schema.Types.ObjectId, ref: 'Person'},
    orderValue: {type: Number},
    taxValue: {type: Number},
    currencyCode: {type: String},
    items: [{type: Schema.Types.ObjectId, ref:'OrderItem'}]
})

module.exports = mongoose.model('Order', OrderSchema);