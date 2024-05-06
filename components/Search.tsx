import Image from "next/image";
import React, { useState } from "react";
import search from "/public/icons/search.png";
import styled from "styled-components";

type Props = {
  movies: movieData[];
};

const Search = ({ movies }: Props) => {
  const [searchValue, setSearchValue] = useState("");

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
      <div className="searched-movies"></div>
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
    height: fit-content;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
  }
`;

export default Search;
