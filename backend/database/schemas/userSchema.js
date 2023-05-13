const { Schema } = require("mongoose");

const shoppingCartSchema = Schema({
  id: Schema.Types.ObjectId,
  products: [{ product: { type: Schema.Types.ObjectId, ref: "Product" }, ammount: Number }],
})

const orderSchema = Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  ammount: Number,
  state: {
    type: String,
    enum: ["comprado", "entregado"],
    default: "comprado"
  }
})
const purchasedSchema = Schema({
  id: Schema.Types.ObjectId,
  products: [orderSchema],
  state: {
    type: String,
    enum: ["en curso", "finalizada"],
    default: "en curso"
  }
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
  shoppingCart: shoppingCartSchema,
  reviewReceived: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  reviewPost: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  purchased: [purchasedSchema],

  //wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }
});

module.exports = userSchema;
