import Image from "next/image";
import React from "react";
import search from "/public/icons/search.png";
import styled from "styled-components";

const Search = () => {
  return (
    <StyledSection>
      <Image src={search} width={18} height={18} alt="sarch" />
      <input type="text" placeholder="Search for movies or TV series" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
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
`;

export default Search;
