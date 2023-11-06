const userModel = require('../Schemas/user')

const getUsers = async (req,res,next) => {
    try {
        const users = await userModel.find().select(["-password", "-_id", "-__v"]);
        if(users.length === 0) {
            return res.status(404).send("no users found");
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error");
    }
};
module.exports = getUsers;