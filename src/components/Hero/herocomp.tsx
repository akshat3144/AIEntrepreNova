import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

const HeroComp = () => {
  const products = [
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/image.png",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/image.png",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/image.png",
    },
    {
      title: "Product 4",
      link: "/product-4",
      thumbnail: "/image.png",
    },
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/image.png",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/image.png",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/image.png",
    },
    {
      title: "Product 4",
      link: "/product-4",
      thumbnail: "/image.png",
    },
    {
      title: "Product 4",
      link: "/product-4",
      thumbnail: "/image.png",
    },
    {
      title: "Product 4",
      link: "/product-4",
      thumbnail: "/image.png",
    },
  ];

  return (
    <div className="bg-black text-white">
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroComp;
