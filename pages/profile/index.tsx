import React from "react";
import { supabase } from "../../utils";
import Link from "next/link";
import Image from "next/image";
import { IRecipe } from "@/types";
import { useUser } from "@clerk/nextjs";
import Head from "next/head";

interface IProps {
  recipes: [IRecipe];
}

export default function Profile({ recipes }: IProps) {
  const { user } = useUser();

  const userRecipes = recipes?.filter(
    (recipe) => recipe?.authorId === user?.id
  );
  return (
    <>
      <Head>
        <title>FoodBase | {user?.firstName}</title>
      </Head>
      <div className="w-full px-[5vw] flex flex-col gap-4 py-[5vh]">
        <p className="text-xl font-poppinsSemiBold">My recipes</p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-start">
          {userRecipes?.map((recipe) => (
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
  const recipes = (await supabase?.from("recipe").select("*"))?.data;

  return {
    props: {
      recipes,
    },
  };
};
