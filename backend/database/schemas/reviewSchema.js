const { Schema } = require("mongoose")

const replyreviewSchema = new Schema({
    reply: {
        type: String,
        required: true
    },
    date: Date,


})
const reviewSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    calification: {
        type: Number,
        required: true,
        min: 1,
        max: 3
    },
    review: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ["Active", "desactived", "blocked"],
        default: "Active"
    },
    client: { type: Schema.Types.ObjectId, ref: "User" },
    vendor: { type: Schema.Types.ObjectId, ref: "User" },
    reply: replyreviewSchema
})

module.exports = reviewSchema