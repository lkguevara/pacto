const LogAdmin = require("../../models/logadmin");

const logAdminPostDay = async () => {
    try {
        const newLog = new LogAdmin()
        newLog.save()
    } catch (error) {
        throw Error(error)
    }

}

module.exports = logAdminPostDay