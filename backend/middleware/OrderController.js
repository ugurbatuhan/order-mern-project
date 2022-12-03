const OrderItem = require("../models/OrderItem")
const Order = require("../models/Order")
const Person = require("../models/Person")
const {response} = require("express");
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
        clientId: 'orders',
        brokers: ['kafka1:9092'],
    })

    exports.getAllOrderItems = async () => {


        const producer = kafka.producer()

        await producer.connect()
        const message = await OrderItem.find().exec(function (err,record){

        })
        await producer.send({
            topic: 'orders',
            messages: [
                {value: message },
            ],
        })
        await producer.disconnect()
    }



    exports.createOrderItem = async (req, res, next) => {
    try{
        await OrderItem.create({
            quantity: req.body.quantity,
            price: req.body.price
        }).then((response) =>
        res.send(response))
    }
    catch (err){
        res.send(err)
    }



    }
    exports.updateOrderItem = async (req, res, next) => {
        try{
            await OrderItem.findByIdAndUpdate({_id: req.body.id}, {$set: {quantity: req.body.quantity, price: req.body.price}}).exec((function (err, record){
                res.send(record)
            }))
        }
        catch (err){
            res.send(err)
        }
    }
    exports.deleteOrderItem = async (req, res, next) => {
        try {
            await OrderItem.findByIdAndDelete(req.body.id).exec(function (err, record){
                res.send(record + "deleted successfully.")
            })
        }
        catch (err){
            res.send(err)
        }
    }
    exports.createOrder = async (req, res, next) => {
        let person;
        let orderItems;
        try{

                OrderItem.find().exec(function(err,record){
                     orderItems = record.map((item) => item["_id"])

                    Order.create({
                        orderDate: Date.now(),
                        soldTo: "638a170c6a64df4c45790f01",
                        billTo: "638a170c6a64df4c45790f01",
                        shipTo: "638a170c6a64df4c45790f01",
                        orderValue: req.body.orderValue,
                        taxValue: req.body.taxValue,
                        currencyCode: req.body.currencyCode,
                        items: orderItems
                    }).then((response) => {
                            res.send(response)
                    })
                })


        }
        catch (err){
            res.send(err)
        }
    }

        exports.getAllOrders = async (req, res, next) => {
            const orders = await Order.find()
            res.json(orders)
        }

    exports.updateOrder = async (req, res, next) => {
        try{
            await Order.findByIdAndUpdate({_id: req.body.id}, {$set: {orderDate: req.body.orderDate,
                    soldTo: req.body.soldTo,
                    billTo: req.body.billTo,
                    shipTo: req.body.shipTo,
                    orderValue: req.body.orderValue,
                    taxValue: req.body.taxValue,
                    currencyCode: req.body.currencyCode,
                    items: req.body.items}}).exec((function (err, record){
                res.send(record)
            }))
        }
        catch (err){
            res.send(err)
        }
    }
exports.deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.body.id).exec(function (err, record){
            res.send(record)
        })
    }
    catch (err){
        res.send(err)
    }
}
