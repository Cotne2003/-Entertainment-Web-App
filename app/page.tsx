"use client";

import { StyledBack } from "@/styles/backContainer";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import search from "/public/icons/search.png";
import styled from "styled-components";
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";

const Home = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  const [trendingMovies, setTrendingMovies] = useState<movieData[]>([]);
  const [userInfo, setUserInfo] = useState<movieData[]>([]);

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/movies", {
      tranding: false,
      image,
      date,
      type,
      age,
      title,
    });
  };

  useEffect(() => {
    const dataComing = async () => {
      const response = await axios.get("/api/movies");
      const responseData = response.data;
      setTrendingMovies(
        responseData.filter((movie: movieData) => movie.tranding === true)
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
        <StyledSection>
          <div className="search">
            <Image src={search} width={18} height={18} alt="sarch" />
            <input type="text" placeholder="Search for movies or TV series" />
          </div>
          <Carousel trendingMovies={trendingMovies} />
          <button onClick={logout} style={{ marginTop: "300px" }}>
            Logout
          </button>
          <form
            onSubmit={(e) => post(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              gap: "10px",
              margin: "20px",
            }}
          >
            <input
              type="text"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
          <div>
            {trendingMovies.map((movie) => (
              <div key={movie._id} style={{ display: "flex", gap: "30px" }}>
                <h2 style={{ color: "white" }}>{movie.title}</h2>
                <Image src={movie.image} alt="photo" width={80} height={50} />
                <button onClick={() => saveMovie(movie._id)}>save</button>
              </div>
            ))}
          </div>
          <div style={{ color: "white", marginTop: "30px" }}>
            <h2>saved movies</h2>
            {userInfo.map((movie) => (
              <p>{movie._id}</p>
            ))}
          </div>
        </StyledSection>
      </StyledBack>
    </>
  );
};

const StyledSection = styled.section`
  .search {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 25px 0;
    input {
      width: 100%;
      color: inherit;
      background-color: inherit;
      border: none;
      font-family: inherit;
      font-weight: 400;
      font-size: 16px;
      outline: none;
      caret-color: #fc4747;
    }
  }
`;

export default Home;
