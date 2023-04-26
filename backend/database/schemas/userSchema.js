const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    calification: Number,
    email: String,
    state: Boolean,
    phone: Number,
    password: String,
    address: String,
    //reviewReceived: { type: Schema.Types.ObjectId, ref: "Review" },
    //reviewPost: { type: Schema.Types.ObjectId, ref: "Review" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    products: { type: Schema.Types.ObjectId, ref: "Product" },
    //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }

})

const User = mongoose.model("User", userSchema);

module.exports = {
    userSchema,
    User
}

