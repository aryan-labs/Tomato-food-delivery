import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://aryan:shriaryan2006@cluster0.bz2pk.mongodb.net/?').then(()=>console.log("DB Connected"));

}