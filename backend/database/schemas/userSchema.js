const { Schema } = require("mongoose");

const shoppingCartSchema = Schema({
  id: Schema.Types.ObjectId,
  products: [{ product: { type: Schema.Types.ObjectId, ref: "Product" }, ammount: Number }],
})

const userSchema = Schema({
  id: Schema.Types.ObjectId,
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  calification: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  verified: Boolean,
  codeverified: Number,
  recoverycode: String,
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: { type: Schema.Types.ObjectId, ref: "City"},
  shoppingCart: shoppingCartSchema,
  reviewReceived: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  reviewPost: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  purchased: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }
});

module.exports = userSchema;
