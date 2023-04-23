import React, { useState } from "react";
import { IRecipe } from "@/types";
import { supabase } from "@/utils";
import { BsFilterSquare } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

interface IProps {
  recipes: [IRecipe];
}

export default function Recipes({ recipes }: IProps) {
  const [filter, setFilter] = useState("");

  const filteredRecipes = recipes?.filter((recipe) =>
    recipe?.title?.toLowerCase().includes(filter?.toLowerCase())
  );
  return (
    <>
      <Head>
        <title>FoodBase | Recipes</title>
      </Head>
      <div className="w-full flex flex-col gap-[5vh] px-[5vw] py-[5vh]">
        <div className="w-full flex lg:justify-between items-start lg:items-center flex-col lg:flex-row justify-start gap-2 lg:gap-0">
          <p className="text-xl font-poppinsSemiBold">Recipes</p>
          <div className="w-full lg:w-[400px] bg-gray-200 rounded-full flex items-center gap-2 px-4 h-10">
            <BsFilterSquare />
            <input
              className="grow bg-transparent outline-none"
              type="text"
              placeholder="Text to filter"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-start">
          {filteredRecipes?.map((recipe) => (
            <Link className="w-full" href={`/recipes/${recipe?.id}`}>
              <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}` + recipe?.image}
                  alt={recipe?.title}
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 right-0 w-full h-full bg-black/50 flex justify-start items-end p-4">
                  <p className="text-[#f0f0f0]">{recipe?.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const recipes = (await supabase.from("recipe").select("*"))?.data;

  return {
    props: {
      recipes,
    },
  };
};
