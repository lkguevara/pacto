const Review = require("../../../models/review");
const User = require("../../../models/user");

const DBReviewPost = async (idUser, review, idVendor) => {
    try {
        const newReview = new Review(review)
        const updateUser = User.findByIdAndUpdate(idUser, { $push: { reviewPost: newReview._id } })
        const updateVendor = await User.findByIdAndUpdate(idVendor, { $push: { reviewReceived: newReview._id } }, { returnDocument: "after" })
        updateVendor.calification += review.calification
        updateVendor.calification = updateVendor.calification / updateVendor.reviewReceived.length
        const response = await updateVendor.save()
        return response


    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = DBReviewPost