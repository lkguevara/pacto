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
        // cont: Number,
    },
    email:
    {
        type: String,
        unique: true,
        required: true,
    },
    state: Boolean,
    verified: Boolean,
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    //reviewReceived: { type: Schema.Types.ObjectId, ref: "Review" },
    //reviewPost: { type: Schema.Types.ObjectId, ref: "Review" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})


module.exports = userSchema

