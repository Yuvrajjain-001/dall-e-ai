import mongoose from "mongoose";

const connectDB=(url)=>{
mongoose.set();
mongoose.connect(url)
.then(()=> console.log('MongoDb connected'))
.catch((err)=> console.log(err))
}

export default connectDB;