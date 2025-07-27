import userModel from "../models/user-model.js";

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        if(!allUsers  || allUsers.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "no user in database"
            })
        }

        if(allUsers) {
            return res.status(200).json({
                success: true,
                users: allUsers
            })
        }
    } catch(err) {
        console.log(`error in get user controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

export default getAllUsers;