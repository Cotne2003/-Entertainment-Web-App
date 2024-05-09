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
          .wrapper {
            width: 200px;
            height: 100px;
            position: relative;
            z-index: 1;
          }
          .circle {
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 50%;
            background-color: #fff;
            left: 15%;
            transform-origin: 50%;
            animation: circle7124 0.5s alternate infinite ease;
          }
          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }
            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }
            100% {
              top: 0%;
            }
          }
          .circle:nth-child(2) {
            left: 45%;
            animation-delay: 0.2s;
          }
          .circle:nth-child(3) {
            left: auto;
            right: 15%;
            animation-delay: 0.3s;
          }
          .shadow {
            width: 20px;
            height: 4px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.9);
            position: absolute;
            top: 62px;
            transform-origin: 50%;
            z-index: -1;
            left: 15%;
            filter: blur(1px);
            animation: shadow046 0.5s alternate infinite ease;
          }
          @keyframes shadow046 {
            0% {
              transform: scaleX(1.5);
            }
            40% {
              transform: scaleX(1);
              opacity: 0.7;
            }
            100% {
              transform: scaleX(0.2);
              opacity: 0.4;
            }
          }
          .shadow:nth-child(4) {
            left: 45%;
            animation-delay: 0.2s;
          }
          .shadow:nth-child(5) {
            left: auto;
            right: 15%;
            animation-delay: 0.3s;
          }
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
