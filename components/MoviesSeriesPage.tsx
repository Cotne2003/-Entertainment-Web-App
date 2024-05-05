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
  useEffect(() => {
    const getMovieTypes = async () => {
      const response = await axios.get("/api/movies");
      const responseData = response.data;
      setMovies(
        responseData.filter((movie: movieData) => movie.type === movieType)
      );
    };
    getMovieTypes();
  }, []);
  return (
    <>
      <NavBar />
      <StyledBack>
        <StyledCont>
          <Search />
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
      justify-content: space-between;
      row-gap: 20px;
    }
  }
`;

export default MoviesSeriesPage;
