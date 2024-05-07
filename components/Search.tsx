import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from "/public/icons/search.png";
import styled from "styled-components";
import OneMovie from "./OneMovie";

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
        movie.title.toLowerCase().startsWith(searchValue.toLowerCase())
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
        <div className="searched-movies">
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
        </div>
      )}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  .search-container {
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
  .searched-movies {
    background-color: #161d2f;
    width: 343px;
    padding: 30px 0;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
  }
`;

export default Search;
