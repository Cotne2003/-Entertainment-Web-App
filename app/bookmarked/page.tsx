"use client";

import NavBar from "@/components/NavBar";
import OneMovie from "@/components/OneMovie";
import Search from "@/components/Search";
import { StyledBack } from "@/styles/backContainer";
import { Title } from "@/styles/title";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const page = () => {
  const [movies, setMovies] = useState<movieData[]>([]);
  const [series, setSeries] = useState<movieData[]>([]);

  useEffect(() => {
    const getMovieTypes = async () => {
      const response = await axios.get("/api/users/me");
      const responseData = response.data;
      setMovies(
        responseData.filter((movie: movieData) => movie.type === "movie")
      );
      setSeries(
        responseData.filter((movie: movieData) => movie.type === "TV Series")
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
            <Title>bookmarked movies</Title>
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
          <div className="movies-cont second">
            <Title>bookmarked tV series</Title>
            <div className="movies">
              {series.map((movie) => (
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
  .second {
    margin-top: 30px;
  }
`;

export default page;
