"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from "/public/icons/search.png";
import styled from "styled-components";
import OneMovie from "./OneMovie";
import { motion } from "framer-motion";

type Props = {
  movies: movieData[];
  userInfo: movieData[];
};

const Search = ({ movies, userInfo }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const [searchedMovies, setSearchedMovies] = useState<movieData[]>([]);
  useEffect(() => {
    setSearchedMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <StyledSection>
      <div className="search-container">
        <Image src={search} width={18} height={18} alt="sarch" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {searchValue && searchedMovies.length !== 0 && (
        <motion.div
          className="searched-movies"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1 }}
        >
          {searchedMovies.map((movie) => (
            <OneMovie
              key={movie._id}
              _id={movie._id}
              age={movie.age}
              date={movie.date}
              image={movie.image}
              title={movie.title}
              type={movie.type}
              userInfo={userInfo}
            />
          ))}
        </motion.div>
      )}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  @media (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .search-container {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 25px 0;
    @media (min-width: 768px) {
      gap: 30px;
    }
    img {
      @media (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
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
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
  }
  .searched-movies {
    background-color: #161d2f;
    width: 363px;
    left: -10px;
    padding: 30px 0;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 20px;
    @media (min-width: 768px) {
      width: 739px;
      row-gap: 30px;
    }
    @media (min-width: 1024px) {
      width: 100%;
      left: -1px;
      column-gap: 30px;
    }
  }
`;

export default Search;
