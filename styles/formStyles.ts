import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    .login-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 327px;
      padding: 30px 20px;
      background-color: #161d2f;
      border-radius: 15px;
      @media (min-width: 768px) {
        width: 400px;
        padding: 35px 35px;
        gap: 25px;
      }
      h1 {
        font-size: 32px;
        color: white;
        font-weight: 400;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        @media (min-width: 768px) {
          gap: 25px;
        }
        .error-parent {
          width: 100%;
          position: relative;
          p {
            position: absolute;
            right: 0;
            top: 13px;
            font-size: 13px;
            color: #fc4747;
          }
        }
        input {
          font-family: inherit;
          font-size: 15px;
          color: white;
          background-color: inherit;
          border: none;
          border-bottom: 1px solid #5a698f;
          width: 100%;
          padding: 10px;
          outline: none;
          caret-color: rgb(252, 71, 71);
          &::placeholder {
            font-size: 15px;
            font-weight: 400;
            font-family: inherit;
            color: #ffffff;
            opacity: 50%;
          }
          &:focus {
            border-bottom: 1px solid white;
          }
        }
        button {
          background-color: #fc4747;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 48px;
          width: 100%;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          font-size: 15px;
          color: white;
          font-weight: 400;
          margin-top: 15px;
          &:active {
            background-color: white;
            color: #161d2f;
            opacity: 100%;
          }
        }
      }
      p {
        width: fit-content;
        margin: 0 auto;
        color: white;
        font-size: 15px;
        font-weight: 400;
        a {
          color: #fc4747;
          text-decoration: none;
        }
      }
    }
  }
`;
