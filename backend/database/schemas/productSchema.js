const { Schema } = require("mongoose")

const productSchema = new Schema({
    name: String,
    image: String,
    description: String,
    state: {
        type:String,
        enum: ['Nuevo (en caja original)', 'Como nuevo', 'Muy bueno', 'Bueno', 'Regular', 'Malo', 'Para piezas']
    },
    price: Float64Array,
    active: {
        type:Boolean,
        default: true
    },
    label: String,
    stock: Float64Array,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    //send: { type: Schema.Types.ObjectId, ref: "Send" },
    //category: { type: Schema.Types.ObjectId, ref: "Category" },
    //questions: { type: Schema.Types.ObjectId, ref: "Question" },
    //reviews: { type: Schema.Types.ObjectId, ref: "Review" },

})

module.exports = productSchema