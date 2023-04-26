const {checkUserExists} = require('../database/controllers/checkUserExists');


const getAllUsers = (req, res) => {

}

const getUserById = (req, res) => {
    const {id} = req.query;
}

module.exports = {getAllUsers}