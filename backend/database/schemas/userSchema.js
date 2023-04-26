const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    calification: Number,
    email: String,
    state: Boolean,
    tellphone: Number,
    address: String,
    //reviewReceived: { type: Schema.Types.ObjectId, ref: "Review" },
    //reviewPost: { type: Schema.Types.ObjectId, ref: "Review" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: { type: Schema.Types.ObjectId, ref: "Product" },
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})

const User = mongoose.Model("User", userSchema);

module.exports = {
    userSchema,
    User
}

