"use client";

import { StyledBack } from "@/styles/backContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import { Title } from "@/styles/title";
import OneMovie from "@/components/OneMovie";
import Search from "@/components/Search";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<movieData[]>([]);
  const [nonTrendingMovies, setNonTrendingMovies] = useState<movieData[]>([]);
  const [userInfo, setUserInfo] = useState<movieData[]>([]);
  const [movies, setMovies] = useState<movieData[]>([]);

  useEffect(() => {
    const dataComing = async () => {
      const response = await axios.get("/api/movies");
      const responseData = response.data;
      setMovies(responseData);
      setTrendingMovies(
        responseData.filter((movie: movieData) => movie.tranding === true)
      );
      setNonTrendingMovies(
        responseData.filter((movie: movieData) => movie.tranding === false)
      );
    };
    dataComing();
    const getUserBookmarks = async () => {
      const response = await axios.get("/api/users/me");
      setUserInfo(response.data);
    };
    getUserBookmarks();
  }, []);

  return (
    <>
      <NavBar />
      <StyledBack>
        <StyledCont>
          <Search movies={movies} userInfo={userInfo} />
          <section>
            <Carousel trendingMovies={trendingMovies} userInfo={userInfo} />
          </section>
          <section className="recommended">
            <Title>Recommended for you</Title>
            <div className="recommended-movies">
              {nonTrendingMovies.map((movie) => (
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
          </section>
        </StyledCont>
      </StyledBack>
    </>
  );
};

const StyledCont = styled.div`
  .recommended {
    margin-top: 200px;
    .recommended-movies {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 20px;
    }
  }
`;

export default Home;
