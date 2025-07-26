import express from 'express';
import dotenv from 'dotenv';
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
})

app.listen(port, function() {
    console.log(`server started on http://localhost:${port}`);
})