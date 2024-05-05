"use client";

import { Title } from "@/styles/title";
import Image from "next/image";
import shape4 from "/public/icons/Shape4.png";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

type Props = {
  trendingMovies: movieData[];
};

const Carousel = ({ trendingMovies }: Props) => {
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
          <div className="movie-container" key={movie._id}>
            <Image
              src={movie.image}
              alt="movie-background"
              width={240}
              height={140}
              className="main-img"
            />
            <div className="movie-info">
              <div className="first-info">
                <p>{movie.date}</p>
                <span className="circle"></span>
                <Image src={shape4} alt="" width={16} height={16} />
                <p>{movie.type}</p>
                <span className="circle"></span>
                <span className="movie-age">{movie.age}</span>
              </div>
              <h3 className="title">{movie.title}</h3>
            </div>
          </div>
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
