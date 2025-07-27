import express from 'express';
import { login, signup } from '../controllers/user-controller.js';
import getAllUsers from '../controllers/get-controller.js';
const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/data', getAllUsers);

export default userRouter;