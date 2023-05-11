const { Schema } = require("mongoose");
const Review = require("../../../models/review");
const User = require("../../../models/user");
const CheckAverageCalification = require("../../../helper/DBCheckAverageCalification");


const DBReviewPost = async (idUser, review, idVendor) => {
    try {
        const newReview = new Review(review)
        const updateUser = await User.findByIdAndUpdate(idUser, { $push: { reviewPost: newReview._id } }, { returnDocument: "after" })
        newReview.client = idUser
        newReview.vendor = idVendor
        const response = await newReview.save()
        const updateVendor = await User.findByIdAndUpdate(idVendor, { $push: { reviewReceived: newReview._id } }, { returnDocument: "after" })
            .select(["calification", "reviewReceived"])
            .populate("reviewReceived")
        updateVendor.calification = CheckAverageCalification(updateVendor.reviewReceived)
        await updateVendor.save()
        return response
    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBReviewPost