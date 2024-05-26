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
import gallaryData from "@/app/appData.json";

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
          src={"/pics/tariq-background.jpg"}
          alt="tariq-louis"
          width={500}
          height={500}
          className="mr-auto ml-auto m-2 filter brightness-50 w-100 md:h-70vh sm:h-50 rounded-lg"
          style={{objectFit:'cover' ,objectPosition: pageX<1200 ? 'top' :"0px -150px" }}
      />
        <Box className="absolute md:left-24 top-2 sm:left-5 p-5 md:w-25">
          <Typography component={"h3"} variant="h3">
            Gallery
          </Typography>
          <Typography component={"p"} variant="h6">
            Feel free to explore a selection of my artwork in the photo gallery
            and place orders online by contacting me directly.
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={cols}
        variant="masonry"
        gap={8}
      >
        {gallaryData.map((item) => (
          <ImageListItem key={item.id} className="bg-brown rounded-md p-2">
            <Image
              src={`/app-pics/${item.id}.jpg`}
              alt={item.title}
              loading="lazy"
              unoptimized
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
