// ek function likhna h jo database se connect krega testing k liye mongodb compass ka url le rhe locahost wala
// not using dotenv beacause localhost url h db ka

import mongoose from "mongoose";
function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/ecom').then(() => {
        console.log("database connected successfully");
    }).catch((err) => {
        console.log(`error in db connection ${err}`);
    })
}

export default connectToDatabase;