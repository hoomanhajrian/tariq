"use client";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import background from "@/pics/tariq-background.jpg";

const gallaryData = [
  { id: 1, title: "", subtitle: "" },
  { id: 2, title: "", subtitle: "" },
  { id: 3, title: "", subtitle: "" },
  { id: 4, title: "", subtitle: "" },
  { id: 5, title: "", subtitle: "" },
  { id: 6, title: "", subtitle: "" },
  { id: 7, title: "", subtitle: "" },
  { id: 8, title: "", subtitle: "" },
  { id: 9, title: "", subtitle: "" },
  { id: 10, title: "", subtitle: "" },
  { id: 11, title: "", subtitle: "" },
  { id: 12, title: "", subtitle: "" },
  { id: 13, title: "", subtitle: "" },
  { id: 14, title: "", subtitle: "" },
  { id: 15, title: "", subtitle: "" },
  { id: 16, title: "", subtitle: "" },
  { id: 17, title: "", subtitle: "" },
  { id: 18, title: "", subtitle: "" },
  { id: 19, title: "", subtitle: "" },
  { id: 20, title: "", subtitle: "" },
  { id: 21, title: "", subtitle: "" },
  { id: 22, title: "", subtitle: "" },
  { id: 23, title: "", subtitle: "" },
  { id: 24, title: "", subtitle: "" },
  { id: 25, title: "", subtitle: "" },
  { id: 26, title: "", subtitle: "" },
  { id: 27, title: "", subtitle: "" },
  { id: 28, title: "", subtitle: "" },
  { id: 29, title: "", subtitle: "" },
  { id: 30, title: "", subtitle: "" },
  { id: 31, title: "", subtitle: "" },
  { id: 32, title: "", subtitle: "" },
  { id: 33, title: "", subtitle: "" },
  { id: 34, title: "", subtitle: "" },
  { id: 35, title: "", subtitle: "" },
  { id: 36, title: "", subtitle: "" },
  { id: 37, title: "", subtitle: "" },
  { id: 38, title: "", subtitle: "" },
  { id: 39, title: "", subtitle: "" },
  { id: 40, title: "", subtitle: "" },
  { id: 41, title: "", subtitle: "" },
  { id: 42, title: "", subtitle: "" },
  { id: 43, title: "", subtitle: "" },
  { id: 44, title: "", subtitle: "" },
  { id: 45, title: "", subtitle: "" },
  { id: 46, title: "", subtitle: "" },
  { id: 47, title: "", subtitle: "" },
  { id: 48, title: "", subtitle: "" },
  { id: 49, title: "", subtitle: "" },
  { id: 50, title: "", subtitle: "" },
  { id: 51, title: "", subtitle: "" },
  { id: 52, title: "", subtitle: "" },
  { id: 53, title: "", subtitle: "" },
  { id: 54, title: "", subtitle: "" },
  { id: 55, title: "", subtitle: "" },
  { id: 56, title: "", subtitle: "" },
  { id: 57, title: "", subtitle: "" },
  { id: 58, title: "", subtitle: "" },
  { id: 59, title: "", subtitle: "" },
  { id: 60, title: "", subtitle: "" },
];

const Gallary = () => {
  const [cols, setCols] = useState(1);
  const [pageX, updatePageX] = useState<number>(0);
  const [dataUrls, updateDataUrls] = useState([]);

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
    <>
      <Box className="relative">
        <Image
          src={background}
          alt="tariq-louis-background"
          width={500}
          height={500}
          className="mr-auto ml-auto m-2 filter grayscale brightness-50 md:w-90 sm:w-100 md:h-65vh sm:h-50 rounded-lg"
        />
        <Box className="absolute md:left-24 top-2 sm:left-5 p-5 md:w-25">
          <Typography component={"h3"} variant="h3">
            Gallary
          </Typography>
          <Typography component={"p"} variant="h6">
            Here you can find some of my artwork to take a look and order online
            by contacting me.
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={cols}
        gap={8}
        className="bg-lightGreen"
      >
        {gallaryData.map((item) => (
          <ImageListItem key={item.id} className="bg-brown">
            <Image
              src={`https://storage.googleapis.com/tariq_bucket/pics/${item.id}.jpg`}
              alt={item.title}
              loading="lazy"
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
            <ImageListItemBar
              className="pl-2"
              title={`${item.id} . ${item.title}`}
              subtitle={<span>{item.subtitle}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
export default Gallary;
