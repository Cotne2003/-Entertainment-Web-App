"use client";

import path2 from "/public/icons/Path2.png";
import shape4 from "/public/icons/Shape4.png";
import Image from "next/image";
import tv from "/public/icons/tv.png";
import path from "/public/icons/Path.png";
import axios from "axios";
import play from "/public/icons/play.png";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  image: string;
  date: string;
  type: string;
  age: string;
  _id: string;
  userInfo: movieData[];
};

const OneTrendingMovie = ({
  _id,
  age,
  date,
  image,
  title,
  type,
  userInfo,
}: Props) => {
  const [saved, setSaved] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const saveMovie = async (id: string) => {
    try {
      await axios.post(
        `https://entertainment-web-app-murex-five.vercel.app/api/movies/${id}`,
        {}
      );
      setSaved(!saved);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isMovieSaved = userInfo.some((movie) => movie._id === _id);
    setSaved(isMovieSaved);
  }, [userInfo]);

  return (
    <div
      className="movie-container"
      key={_id}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <div className="circle-of-save" onClick={() => saveMovie(_id)}>
        <Image src={saved ? path2 : path} alt="" width={12} height={14} />
      </div>
      {onHover && (
        <div className="hover-blur">
          <div className="play-cont">
            <Image src={play} alt="" width={30} height={30} />
            <p>play</p>
          </div>
        </div>
      )}
      <Image
        src={image}
        alt="movie-background"
        width={470}
        height={230}
        className="main-img"
      />
      <div className="movie-info">
        <div className="first-info">
          <p>{date}</p>
          <span className="circle"></span>
          <Image
            src={type === "movie" ? shape4 : tv}
            alt=""
            width={16}
            height={16}
          />
          <p>{type}</p>
          <span className="circle"></span>
          <span className="movie-age">{age}</span>
        </div>
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default OneTrendingMovie;
