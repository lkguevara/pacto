const LogAdmin = require("../../models/logadmin");
const logActives = require("./handlers/logActives");
const logBalanceToday = require("./handlers/logBalanceToday");
const logReviews = require("./handlers/logReviews");
const logQuestions = require("./handlers/logquestions");

const LogAdminController = async (valuemain, valuesecondary, query) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const logToday = await LogAdmin.findOne({ date: { $gte: today.toISOString(), $lt: tomorrow.toISOString() } })
        if (query === "balance") {
            await logBalanceToday(valuemain, valuesecondary, logToday)
        }
        else if (query === "actives") {
            await logActives(valuemain, valuesecondary, logToday)
        }
        else if (query === "reviews") {
            await logReviews(valuemain, logToday)
        }
        else if (query === "questions") {
            await logQuestions(valuemain, logToday)
        }

    } catch (error) {
        throw Error(error)
    }


}

module.exports = LogAdminController