const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    datetime: { type: String, required: true },
    price: { type: String, required: true },
},{
    timestamps:true
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;