import React from "react";
import Head from "next/head";
import { FaPizzaSlice, FaHamburger, FaFish } from "react-icons/fa";
import {
  GiNoodles,
  GiTacos,
  GiBowlOfRice,
  GiDonut,
  GiPretzel,
  GiSteak,
} from "react-icons/gi";
import Link from "next/link";
import {
  AiOutlineLogin,
  AiFillEye,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrTumblr } from "react-icons/gr";
import { ImGooglePlus } from "react-icons/im";

export default function Home() {
  return (
    <>
      <Head>
        <title>FoodBase</title>
      </Head>
      <div className="w-full flex flex-col pt-[5vh]">
        <div className="w-full h-[90vh] flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[5vw] mb-[5vh] gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <p className="text-4xl font-poppinsSemiBold">
              Find recipes from all over the <br />
              world and try something new
            </p>
            <Link
              className="bg-[#212121] w-full lg:w-[100px] text-center text-[#f0f0f0] rounded-full h-10 grid place-items-center"
              href="/recipes"
            >
              Start
            </Link>
          </div>
          <div className="lg:w-1/2 grid place-items-center">
            <div className="grid grid-cols-3 gap-2 text-[4em]">
              <FaHamburger />
              <FaPizzaSlice />
              <GiNoodles />
              <GiTacos />
              <FaFish />
              <GiBowlOfRice />
              <GiDonut />
              <GiPretzel />
              <GiSteak />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center px-[5vw] mb-[10vh] flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="w-4/5 lg:w-1/5 aspect-square bg-[#212121] rounded-full flex flex-col justify-center items-center gap-4 text-[#f0f0f0]">
            <AiOutlineLogin className="text-4xl" />
            <p className="text-xl">Log In</p>
          </div>
          <div className="w-4/5 lg:w-1/5 aspect-square bg-[#212121] rounded-full flex flex-col justify-center items-center gap-4 text-[#f0f0f0]">
            <BsFillPencilFill className="text-4xl" />
            <p className="text-xl">Create</p>
          </div>
          <div className="w-4/5 lg:w-1/5 aspect-square bg-[#212121] rounded-full flex flex-col justify-center items-center gap-4 text-[#f0f0f0]">
            <AiFillEye className="text-4xl" />
            <p className="text-xl">Look Around</p>
          </div>
          <div className="w-4/5 lg:w-1/5 aspect-square bg-[#212121] rounded-full flex flex-col justify-center items-center gap-4 text-[#f0f0f0]">
            <BiHappyAlt className="text-4xl" />
            <p className="text-xl">Enjoy!</p>
          </div>
        </div>
        <div className="w-full flex bg-[#212121] text-[#f0f0f0] flex-col lg:flex-row lg:h-[40vh]">
          <div className="w-full lg:w-1/2 grid place-items-center">
            <div className="w-4/5 flex flex-col gap-2 h-[20vh] justify-center">
              <p className="text-2xl font-poppinsSemiBold">FoodBase</p>
              <div className="flex items-center gap-2">
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <AiOutlineTwitter />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <FaPinterestP />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <GrTumblr />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <AiFillYoutube />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <ImGooglePlus />
                </div>
                <div className="bg-[#f0f0f0] rounded-full grid place-items-center text-[#212121] w-8 h-8 cursor-pointer">
                  <AiFillInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden lg:flex items-center gap-2">
            <div className="flex flex-col gap-1 w-1/3">
              <p className="font-poppinsSemiBold">SITE MAP</p>
              <p>Recipes & Menus</p>
              <p>Expert Advice</p>
              <p>Ingredients</p>
              <p>Holidays & Events</p>
              <p>Videos</p>
            </div>
            <div className="flex flex-col gap-1 w-1/3">
              <p className="font-poppinsSemiBold">HELPFUL LINKS</p>
              <p>Subscription FAQs</p>
              <p>Contact Us</p>
              <p>Masthead</p>
              <p>Accessibility Help</p>
              <p>Advertising</p>
            </div>
            <div className="flex flex-col gap-1 w-1/3">
              <p className="font-poppinsSemiBold">FOOD INNOVATION GROUP</p>
              <p>The FoodBase App</p>
              <p>Bon Appetit</p>
              <p>FoodBAse</p>
              <p>Gourmet</p>
              <p>Recipes</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between bg-[#212121] items-center text-[#f0f0f0] px-[5vw] h-[8vh] border-t border-[#f0f0f0]">
          <p className="font-poppinsSemiBold text-xl lg:text-sm">FoodBase</p>
          <p>&copy;2023</p>
        </div>
      </div>
    </>
  );
}
