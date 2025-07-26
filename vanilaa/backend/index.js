import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './db/db.js';
import userRouter from './routes/user-routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.get('/', function(req, res) {
    res.status(200).json([
        {
            "msg": "api is working"
        },
        {
            "msg": "this is our home route"
        }
    ])
});


// all api endpoints
app.use('/api/v1/user', userRouter);


// calling function of database
connectToDatabase();

app.listen(port, function() {
    console.log(`server started on http://localhost:${port}`);
})