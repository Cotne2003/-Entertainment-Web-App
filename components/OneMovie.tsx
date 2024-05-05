import Image from "next/image";
import React from "react";
import shape4 from "/public/icons/Shape4.png";
import styled from "styled-components";

type Props = {
  title: string;
  image: string;
  date: string;
  type: string;
  age: string;
  _id: string;
};

const OneMovie = ({ title, _id, age, date, image, type }: Props) => {
  return (
    <MovieContainer>
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
