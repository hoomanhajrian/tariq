"use client";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Tooltip,
  Button
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";
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
          src={"/pics/tariq-background.jpg"}
          alt="tariq-louis"
          width={500}
          height={500}
          className="mr-auto ml-auto m-2 filter brightness-50 w-100 md:h-70vh sm:h-50 rounded-lg"
          style={{ objectFit: 'cover', objectPosition: pageX < 1200 ? 'top' : "0px -150px" }}
        />
        <Box className="absolute md:left-70 top-7 sm:left-5 p-5 md:w-25">
          <Typography component={"h3"} variant="h3">
            الصور
          </Typography>
          <Typography component={"p"} variant="h6">
            لا تتردد في استكشاف مجموعة مختارة من أعمالي الفنية في معرض الصور
            وتقديم الطلبات عبر الإنترنت عن طريق الاتصال بي مباشرة.
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
              src={`/app-pics/${item.id}.jpg`}
              alt={item.title}
              loading="lazy"
              width={100}
              height={100}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="flex justify-between align-middle items-center">
              <ImageListItemBar
                className="p-2 text-wrap w-80 h-auto"
                title={`${item.id} . ${item.title != '' ? item.title : 'No Name'}`}
                subtitle={<span>{item.subtitle}</span>}
                position="below"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Tooltip disableFocusListener title="Share Item" placement="top">
                  <Button
                    sx={{ color: "white", fontSize: "0.4rem" }}
                    onClick={() => {
                      navigator.share({
                        title: "Share Link",
                        text: "Item Link",
                        url: `/app-pics/${item.id}.jpg`,
                      });
                    }}
                  >
                    <ShareIcon />
                  </Button>
                </Tooltip>
                <Tooltip disableFocusListener title="Download" placement="right">
                  <Button sx={{ color: "white", fontSize: "0.4rem" }} href={`/app-pics/${item.id}.jpg`} target="_blank" download><DownloadIcon color="inherit" /></Button>
                </Tooltip>

              </Box>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
export default Gallary;
