import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function HomeSlides() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "This is text",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1606898425083-0e6915bf7870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
      text: "this is text",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1598514983195-94d7470a4241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "this is text",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1560963689-de7010066a17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
      text: "this is text",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "this is text",
    },
  ];
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
      infinite
      autoPlay
      draggable={false}
      swipeable={false}
      pauseOnHover={false}
      className="rounded-lg overflow-hidden"
    >
      {data.map((slide) => (
        <div className="w-full relative h-[350px]" key={slide.id}>
          <Image
            src={slide.image}
            alt="slide image"
            width={1000}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-black/50 flex justify-start items-end p-4 text-[#f0f0f0] w-full h-full">
            <p className="text-xl font-poppinsSemiBold">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
