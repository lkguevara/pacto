const { Schema } = require("mongoose")

const productSchema = new Schema({
    name: String,
    image: String,
    description: String,
    state: {
        type:String,
        enum: ['Nuevo (en caja original)', 'Como nuevo', 'Muy bueno', 'Bueno', 'Regular', 'Malo', 'Para piezas']
    },
    price: Number,
    active: {
        type:Boolean,
        default: true
    },
    label: String,
    stock: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    //send: { type: Schema.Types.ObjectId, ref: "Send" },
    //category: { type: Schema.Types.ObjectId, ref: "Category" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    //reviews: { type: Schema.Types.ObjectId, ref: "Review" },

})



module.exports = productSchema