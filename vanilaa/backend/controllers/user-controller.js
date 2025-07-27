import userModel from "../models/user-model.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || password) {
            return res.status(400).json({
                success: false,
                msg: "all fields are required"
            });
        }

        const existingUser = userModel.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                success: false,
                msg: "user already exists"
            })
        }

        const newUser = userModel.create({
            name: name,
            email: email,
            password: password
        });

        return res.status(200).json({
            success: true,
            msg: "user signup successfully"
        });

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}



// login controller 
export const login = async (req, res) => {
    try {
        const { email } = req.body;
    } catch(err) {
        console.log(`error in login controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}