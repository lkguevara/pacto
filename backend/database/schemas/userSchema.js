const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstname:
    {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    calification: {
        type: Number,
        default: 0,
    },
    email:
    {
        type: String,
        unique: true,
        required: true,
    },
    state: {
        type: Boolean,
        default: true
    },
    verified: Boolean,
    codeverified: Number,
    recoverycode: String,
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    shoppingCart: [
        {
            id: {
                type: String,
                required: false
            },
            product: {
                type: String,
                required: false
            },
          
            price: {
                type: Number,
                required: false
            },
            amount: {
                type: String,
                required: false
            }
        }],
    reviewReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    reviewPost: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})



  

module.exports = userSchema

