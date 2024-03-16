"use client";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
const Gallary = () => {
  const [cols, setCols] = useState(1);
  const [pageX, updatePageX] = useState<number>(0);
  useEffect(() => {
    updatePageX(window.innerWidth);
    const handleResize = () => {
      updatePageX(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pageX > 600 && pageX < 900) {
      setCols(2);
    } else if (pageX > 900 && pageX < 1200) {
      setCols(3);
    } else if (pageX > 1200) {
      setCols(4);
    } else {
      setCols(1);
    }
  }, [pageX]);

  return (
    <ImageList
      sx={{ width: "100%", height: "100%", direction: "rtl" }}
      cols={cols}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            unoptimized
            width={100}
            height={100}
            style={{ width: "100%", height: "100%" }}
          />
          <ImageListItemBar
            className="pr-2 text-righ bg-brown"
            title={item.title}
            subtitle={<span> {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Gallary;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "شتنسیتشصمی",
    author: "ننشسیدخ",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
