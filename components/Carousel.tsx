"use client";

import { Title } from "@/styles/title";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import OneTrendingMovie from "./OneTrendingMovie";

type Props = {
  trendingMovies: movieData[];
  userInfo: movieData[];
};

const Carousel = ({ trendingMovies, userInfo }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isClicked) {
      intervalId = setInterval(() => {
        scrollableRef.current?.scrollBy(1, 0);
      }, 20);
    }

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isClicked]);
  return (
    <StyledCarousel>
      <Title>trending</Title>
      <div
        className="carousel"
        ref={scrollableRef}
        onMouseOver={() => {
          setIsClicked(true);
        }}
        onMouseOut={() => {
          setIsClicked(false);
        }}
      >
        {trendingMovies.map((movie) => (
          <OneTrendingMovie
            key={movie._id}
            image={movie.image}
            _id={movie._id}
            date={movie.date}
            type={movie.type}
            age={movie.age}
            title={movie.title}
            userInfo={userInfo}
          />
        ))}
      </div>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  .carousel {
    width: calc(343px);
    gap: 35px;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    &::-webkit-scrollbar {
      display: none;
    }
    .movie-container {
      position: relative;
      height: 140px;
      padding: 85px 0 0 20px;
      .circle-of-save {
        width: 32px;
        height: 32px;
        background-color: rgba(16, 20, 30, 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -5px;
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
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
      .movie-info {
        width: 200px;
        .title {
          font-size: 15px;
          font-weight: 400;
          text-transform: capitalize;
          margin-top: 3px;
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
    }
  }
`;

export default Carousel;
