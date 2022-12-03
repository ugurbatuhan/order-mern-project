const avro = require("avsc");

const eventType = avro.Type.forSchema({
    type: 'record',
    fields: [
        {
            name: 'quantity',
            type: { type: 'int' }
        },
        {
            name: 'price',
            type: 'int',
        }
    ]
});
module.exports = eventType