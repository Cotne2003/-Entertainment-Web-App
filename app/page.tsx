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

  useEffect(() => {
    const dataComing = async () => {
      const response = await axios.get("/api/movies");
      const responseData = response.data;
      setTrendingMovies(
        responseData.filter((movie: movieData) => movie.tranding === true)
      );
      setNonTrendingMovies(
        responseData.filter((movie: movieData) => movie.tranding === false)
      );
    };
    dataComing();
    const userInfoComing = async () => {
      const response = await axios.get("/api/users/me");
      setUserInfo(response.data);
    };
    userInfoComing();
  }, []);

  const saveMovie = async (id: string) => {
    try {
      await axios.post(`/api/movies/${id}`, {});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <StyledBack>
        <StyledCont>
          <Search />
          <section>
            <Carousel trendingMovies={trendingMovies} />
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
                />
              ))}
            </div>
          </section>
          <div style={{ color: "white", marginTop: "30px" }}>
            <h2>saved movies</h2>
            {userInfo.map((movie) => (
              <p>{movie._id}</p>
            ))}
          </div>
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
