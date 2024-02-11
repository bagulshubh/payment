'use server'

import User from "@/Models/User";
import { connectMongoDB } from "@/libs/MongoConnect"
import { Contrail_One } from "next/font/google";

export const createUser = async(data)=>{

    try{
        await connectMongoDB();
        const password = data.password;
        const confirmPassword = data.confirmPassword;

        if(password!==confirmPassword){
            console.log("Password does not match")
            return "Password and Confirm Password does not match"
        }
        if(!data.name){
            return "Name is required"
        }
        const created = await User.create({
            name:data.name,
            password:password,
        })
        console.log(created);
        return "Success"
    } catch(err){
        console.log(err);
    }

}

export const login = async(data)=>{
    try{

        await connectMongoDB();

        const {name,password} = data;

        if(!name || !password){
            return {success:false,message:"Fill Name and Password"}
        }

        const user = await User.find({name:name , password:password});

        if(Object.keys(user).length  === 0){
            return {success:false,message:"User does not exists"}
        }

        return user;

    } catch(err){
        console.log(err);
    }
}
