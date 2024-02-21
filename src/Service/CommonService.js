'use server'

import Account from "@/Models/Account";
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

export const connectUsers = async(id1,id2)=>{
    try{

        await connectMongoDB();
        const user = await User.findByIdAndUpdate(id1,{
            $push:{
                connectedArr:id2
            }
        })

        const user2 = await User.findByIdAndUpdate(id2,{
            $push:{
                connectedArr:id1
            }
        })

        const account = await Account.create({
            userId1:id1,
            userId2:id2
        })
        console.log(account)

        return user;

    } catch(err){
        console.log(err);
    }
}
