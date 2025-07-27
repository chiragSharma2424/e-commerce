import userModel from "../models/user-model.js";
import bcrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({
                success: false,
                msg: "all fields are required"
            });
        }

        const existingUser = await userModel.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                success: false,
                msg: "user already exists"
            })
        }

        // password must be hashed in DB
        const hashedPassword = await bcrpt.hash(password, 10);
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });


        // genrating a jwt
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        return res.status(200).json({
            success: true,
            msg: "user signup successfully",
            user: newUser,
            token: token
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