"use client";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import background from "@/pics/tariq-background.jpg";
import gallaryData from "@/app/appData.json";
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
    } else if (pageX > 900) {
      setCols(3);
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
        <Box className="absolute md:left-70 top-7 sm:left-5 p-5 md:w-25">
          <Typography component={"h3"} variant="h3">
            الصور
          </Typography>
          <Typography component={"p"} variant="h6">
            هنا يمكنك العثور على بعض أعمالي الفنية لإلقاء نظرة عليها وطلبها عبر
            الإنترنت عن طريق الاتصال بي.
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={cols}
        variant="masonry"
        gap={8}
        className="bg-lightGreen"
      >
        {gallaryData.map((item) => (
          <ImageListItem key={item.id} className="bg-brown rounded-md p-2">
            <Image
              src={`https://storage.googleapis.com/tariq_bucket/pics/${item.id}.jpg`}
              alt={item.title}
              loading="lazy"
              width={100}
              height={100}
              style={{ width: "100%", height: "auto" }}
            />
            <ImageListItemBar
              className="p-2 h-auto"
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
