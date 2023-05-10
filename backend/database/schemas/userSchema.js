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
    reviewReceived: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    reviewPost: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})


module.exports = userSchema

