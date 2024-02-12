'use server'

import User from "@/Models/User";
import { connectMongoDB } from "@/libs/MongoConnect";

export const getAllUser = async()=>{
    try{
        await connectMongoDB();
        const users = await User.find({});

        return users;

    } catch(err){
        console.log(err);
    }
}