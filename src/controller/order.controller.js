const Order = require("../model/order.model");

//Add New Order
const createOrder = async (req, res) => {
    if (req.body) {
        const order = new Order(req.body);
        await order.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));
    }
}

// update Order Details
const updateOrder = async (req, res) => {
    if (req.body) {
        if (!req.params.id) return res.status(500).send("Id is missing");
        let id = req.params.id;
        updateDetails(id, req, (err, order) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(order);
        })
    }
}

function updateDetails(id, req, callback) {
    Order.findByIdAndUpdate(id, req.body)
        .then((res) => {
            Order.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var appointment = result;
                    console.log(appointment);
                    return callback(null, appointment);
                }
            });
        })
        .catch(err => {
            console.log(err) 
            return callback(err);
        })
}

//get All Orders
const getAllOrders = async (req, res) => {
    await Order.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//get Order by ID
const getOrderById = async (req, res) => {
    await Order.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
};


//delete Order
const deleteOrder = async (req, res) => {
    if (req.params.id) {
        await Order.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            return res.status(200).send(result);
        });
    }
}




module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
}