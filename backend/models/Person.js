const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PersonSchema = new Schema(
    {
        city: {type: String},
        country: {type: String},
        extensionFields: {type: String},
        firstName: {type: String},
        houseNumber: {type: String},
        lastName: {type: String},
        streetAddress: {type: String},
        zip: {type: String}
    }
);


module.exports = mongoose.model('Person', PersonSchema);