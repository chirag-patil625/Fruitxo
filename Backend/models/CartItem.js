const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Fruit',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }   
    }]
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;