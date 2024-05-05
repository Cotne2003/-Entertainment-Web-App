import Image from "next/image";
import React, { useEffect, useState } from "react";
import shape4 from "/public/icons/Shape4.png";
import path from "/public/icons/Path.png";
import path2 from "/public/icons/Path2.png";
import styled from "styled-components";
import axios from "axios";

type Props = {
  title: string;
  image: string;
  date: string;
  type: string;
  age: string;
  _id: string;
  userInfo: movieData[];
};

const OneMovie = ({ title, _id, age, date, image, type, userInfo }: Props) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const isMovieSaved = userInfo.some((movie) => movie._id === _id);
    setSaved(isMovieSaved);
  }, []);

  const saveMovie = async (id: string) => {
    try {
      await axios.post(`/api/movies/${id}`, {});
      setSaved(!saved);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MovieContainer>
      <div className="circle-of-save" onClick={() => saveMovie(_id)}>
        <Image src={saved ? path2 : path} alt="" width={12} height={14} />
      </div>
      <Image
        src={image}
        alt="movie-background"
        width={164}
        height={110}
        className="main-img"
      />
      <div className="movie-info">
        <div className="first-info">
          <p>{date}</p>
          <span className="circle"></span>
          <Image src={shape4} alt="" width={16} height={16} />
          <p>{type}</p>
          <span className="circle"></span>
          <span className="movie-age">{age}</span>
        </div>
        <h3 className="title">{title}</h3>
      </div>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  position: relative;
  .circle-of-save {
    width: 32px;
    height: 32px;
    background-color: rgba(16, 20, 30, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    /* &:hover {
      background-color: white;
      img {
        filter: invert(0%) sepia(12%) saturate(7478%) hue-rotate(130deg)
          brightness(4%) contrast(101%);
      }
    } */
  }
  .main-img {
    border-radius: 10px;
  }
  .movie-info {
    margin-top: 10px;
    .title {
      font-size: 15px;
      font-weight: 400;
      text-transform: capitalize;
      margin-top: 4px;
    }
    .first-info {
      display: flex;
      align-items: center;
      gap: 8px;
      .circle {
        width: 3.5px;
        height: 3px;
        border-radius: 50%;
        background-color: white;
        opacity: 75%;
      }
      img {
        filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
          brightness(205%) contrast(100%);
      }
      p {
        opacity: 75%;
        font-size: 12px;
        font-weight: 400;
        text-transform: capitalize;
      }
      .movie-age {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
        opacity: 75%;
      }
    }
  }
`;

export default OneMovie;
