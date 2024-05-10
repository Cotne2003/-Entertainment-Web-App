"use client";

import NavBar from "@/components/NavBar";
import OneMovie from "@/components/OneMovie";
import Search from "@/components/Search";
import { StyledBack } from "@/styles/backContainer";
import { Title } from "@/styles/title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  movieType: string;
};

const MoviesSeriesPage = ({ movieType }: Props) => {
  const [movies, setMovies] = useState<movieData[]>([]);
  const [allMovies, setAllMovies] = useState<movieData[]>([]);
  const [userInfo, setUserInfo] = useState<movieData[]>([]);

  useEffect(() => {
    const getMovieTypes = async () => {
      const response = await axios.get(
        `${process.env.API_BASE_URL}/api/movies`
      );
      const responseData = response.data;
      setAllMovies(responseData);
      setMovies(
        responseData.filter((movie: movieData) => movie.type === movieType)
      );
    };
    getMovieTypes();
    const getUserBookmarks = async () => {
      const response = await axios.get(
        `${process.env.API_BASE_URL}/api/users/me`
      );
      setUserInfo(response.data);
    };
    getUserBookmarks();
  }, []);
  return (
    <>
      <NavBar />
      <StyledBack>
        <StyledCont>
          <Search movies={allMovies} userInfo={userInfo} />
          <div className="movies-cont">
            <Title>{movieType === "movie" ? "movies" : "tV series"}</Title>
            <div className="movies">
              {movies.map((movie) => (
                <OneMovie
                  _id={movie._id}
                  age={movie.age}
                  date={movie.date}
                  image={movie.image}
                  title={movie.title}
                  type={movie.type}
                  key={movie._id}
                  userInfo={userInfo}
                />
              ))}
            </div>
          </div>
        </StyledCont>
      </StyledBack>
    </>
  );
};

const StyledCont = styled.div`
  .movies-cont {
    .movies {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      row-gap: 20px;
      @media (min-width: 768px) {
        row-gap: 30px;
        gap: 29px;
        margin-top: 30px;
      }
    }
  }
`;

export default MoviesSeriesPage;
