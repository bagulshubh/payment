'use client'

import { UserContext } from "@/Context/UserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Navbar from "@/Components/Navbar";

export default function Home() {

  const context = useContext(UserContext)
  let user = context.user;

  const router = useRouter();

  useEffect(()=>{
    user = JSON.parse(localStorage.getItem("user")) || null
    context.setuser(user);
   },[])

  return (
    <div className="home-wrapper">

      <Navbar></Navbar>
  
      <ol className="heading-con">
        <li>Manage Your Fitness Goals</li>
        <li>Explore Delicious Recipes</li>
        <li>Discover New Podcasts</li>
        <li>Stay Informed with Daily News</li>
        <li>Cultivate a Mindful Lifestyle</li>
      </ol>

      <div className="red-btn"> {user === null || Object.keys(user).length === 0 ? 
        <div onClick={()=>{router.push("/signup")}}>Create Account</div> :
        <div onClick={()=>{router.push("/explore")}}>Explore</div>}</div>

      <div className="home-para">Capture and Share Moments with Photo Stories</div>
      <div className="home-para">Automate Repetitive Tasks for Increased Efficiency</div>
      <div className="home-para">Connect with Like-minded Individuals in Communities</div>
      <div className="home-para">Set and Achieve Goals with Personalized Progress Tracking</div>


    </div>
  );
}
