const Person = require("../models/Person");



exports.createPerson = async (req, res, next) => {
    try {
        await Person.create({
            city: req.body.city,
            country: req.body.country,
            extensionFields: req.body.extensionFields,
            firstName: req.body.firstName,
            houseNumber: req.body.houseNumber,
            lastName: req.body.lastName,
            streetAddress: req.body.streetAddress,
            zip: req.body.zip
        }).then((response) =>
            res.send(response))
    } catch (err) {
        res.send(err)
    }
}

exports.getAllPerson = async (req, res, next) => {
    try {
        const people = await Person.find();
        res.json(people)
    } catch (err) {
        res.send(err)
    }
}
exports.updatePerson = async (req, res, next) => {
    try{
        await Person.findByIdAndUpdate({_id: req.body.id}, {$set: {
                city: req.body.city,
                country: req.body.country,
                extensionFields: req.body.extensionFields,
                firstName: req.body.firstName,
                houseNumber: req.body.houseNumber,
                lastName: req.body.lastName,
                streetAddress: req.body.streetAddress,
                zip: req.body.zip
            }}).exec((function (err, record){
            res.send(record)
        }))
    }
    catch (err){
        res.send(err)
    }
}
exports.deletePerson = async (req, res, next) => {
    try {
        await Person.findByIdAndDelete(req.body.id).exec(function (err, record){
            res.send(record + "deleted successfully.")
        })
    }
    catch (err){
        res.send(err)
    }
}