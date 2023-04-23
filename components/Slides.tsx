import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IRecipe } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  recipes: [IRecipe];
}

export default function Slides({ recipes }: IProps) {
  return (
    <div className="w-full">
      <Swiper className="w-full" slidesPerView={4} spaceBetween={4}>
        {recipes?.map((recipe) => (
          <SwiperSlide
            className="w-full relative rounded-lg overflow-hidden h-[200px]"
            key={recipe?.id}
          >
            <Link className="w-full" href={`/recipes/${recipe?.id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}` + recipe?.image}
                alt={recipe?.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-black/50 w-full h-full flex justify-start items-end p-4 text-[#f0f0f0]">
                <p>{recipe?.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
