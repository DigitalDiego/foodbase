import React, { useState } from "react";
import { supabase } from "@/utils";
import { IRecipe } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface IProps {
  recipe: [IRecipe];
}

export default function Recipe({ recipe }: IProps) {
  const [option, setOption] = useState(false);
  const r = recipe[0];

  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <>
      <Head>
        <title>FoodBase | </title>
      </Head>
      <div className="w-full px-[5vw] py-[5vh] flex gap-[5vw] justify-start flex-col lg:flex-row">
        {/* Description */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full lg;w-4/5 grid place-items-center mx-auto">
            <p className="text-xl font-poppinsSemiBold">{r?.title}</p>
          </div>
          <div className="w-full lg:w-4/5 grid place-items-center mx-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}` + r?.image}
              alt={r?.title}
              width={500}
              height={500}
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-4/5 flex justify-end items-center mx-auto">
            <Link href={`/authors/${r?.authorId}`}>Author: {r?.author}</Link>
          </div>
          <p className="w-4/5 mx-auto">{r?.description}</p>
        </div>
        {/* Options */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full lg:w-4/5 mx-auto flex">
            <div
              className={cn(
                "w-1/2 h-10 grid place-items-center cursor-pointer",
                !option
                  ? "bg-[#212121] text-[#f0f0f0]"
                  : "bg-transparent text-[#212121]"
              )}
              onClick={() => setOption(false)}
            >
              <p>Ingredients</p>
            </div>
            <div
              className={cn(
                "w-1/2 h-10 grid place-items-center cursor-pointer",
                option
                  ? "bg-[#212121] text-[#f0f0f0]"
                  : "bg-transparent text-[#212121]"
              )}
              onClick={() => setOption(true)}
            >
              <p>Instructions</p>
            </div>
          </div>
          {/* Data */}
          {!option ? (
            <div className="w-fulllg:w-4/5 lg:mx-auto flex flex-col gap-2">
              {r?.ingredients?.map((i, idx) => (
                <p key={idx}>- {i}</p>
              ))}
            </div>
          ) : (
            <div className="w-full lg:w-4/5 lg:mx-auto flex flex-col gap-2">
              {r?.instructions?.map((i, idx) => (
                <p key={idx}>
                  {idx + 1}. {i}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id;
  const recipe = (await supabase.from("recipe").select("*").eq("id", id))?.data;

  return {
    props: {
      recipe,
    },
  };
};
