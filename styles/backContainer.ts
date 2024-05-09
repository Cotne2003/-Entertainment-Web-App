import styled from "styled-components";

export const StyledBack = styled.div`
  max-width: 343px;
  margin: 0 auto;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    max-width: 719px;
  }
  @media (min-width: 1024px) {
    max-width: calc(100vw - 170px);
    margin: 0 0 0 170px;
    padding-top: 15px;
  }
`;
