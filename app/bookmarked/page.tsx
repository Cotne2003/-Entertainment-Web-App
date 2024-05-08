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
  const [allMovies, setAllMovies] = useState<movieData[]>([]);
  const [series, setSeries] = useState<movieData[]>([]);
  const [userInfo, setUserInfo] = useState<movieData[]>([]);

  useEffect(() => {
    const getMovieTypes = async () => {
      const response = await axios.get("/api/users/me");
      const responseData = response.data;
      setAllMovies(responseData);
      setUserInfo(responseData);
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
          <Search movies={allMovies} userInfo={userInfo} />
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
                  userInfo={userInfo}
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
      row-gap: 20px;
      gap: 15px;
      @media (min-width: 768px) {
        row-gap: 30px;
        gap: 29px;
        margin-top: 30px;
      }
    }
  }
  .second {
    margin-top: 30px;
    @media (min-width: 768px) {
      margin-top: 40px;
    }
  }
`;

export default page;
