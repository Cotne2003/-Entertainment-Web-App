"use client";

import Image from "next/image";
import logo from "/public/assets/logo.png";
import styled from "styled-components";
import Link from "next/link";
import tv from "/public/icons/tv.png";
import shape from "/public/icons/Shape.png";
import shape4 from "/public/icons/Shape4.png";
import bookmark from "/public/icons/Bookmark.png";
import profile from "/public/assets/profile.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const path = usePathname();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <StyledNav>
      <div className="wrapper">
        <Image src={logo} alt="logo" className="logo" width={25} height={20} />
        <div className="nav-container">
          <Link href={"/"}>
            <Image
              src={shape}
              alt=""
              className={path === "/" ? "active" : ""}
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/movies"}>
            <Image
              src={shape4}
              alt=""
              className={path === "/movies" ? "active" : ""}
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/tv-series"}>
            <Image
              src={tv}
              alt=""
              className={path === "/tv-series" ? "active" : ""}
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/bookmarked"}>
            <Image
              src={bookmark}
              alt=""
              className={"bookmark " + (path === "/bookmarked" ? "active" : "")}
              width={17}
              height={20}
            />
          </Link>
        </div>
        <Image
          src={profile}
          alt="profile"
          className="profile-img"
          width={24}
          height={24}
          onClick={logout}
        />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #161d2f;
  padding: 20px 0px;
  @media (min-width: 768px) {
    width: 719px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 20px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 343px;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 100%;
      margin: 0 20px;
    }
    .logo {
      @media (min-width: 768px) {
        width: 30px;
        height: 25px;
      }
    }
    .nav-container {
      display: flex;
      gap: 20px;
      align-items: center;
      img {
        margin-top: 5px;
        @media (max-width: 767px) {
          width: 16px;
          height: 16px;
        }
      }
      .bookmark {
        @media (max-width: 767px) {
          width: 14px;
        }
      }
    }
    .profile-img {
      border-radius: 13px;
      outline: 1px solid #fc4747;
      cursor: pointer;
      filter: none;
      @media (min-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media (min-width: 1024px) {
    img {
      &:hover {
        filter: invert(41%) sepia(82%) saturate(3512%) hue-rotate(337deg)
          brightness(107%) contrast(98%);
      }
    }
  }
  .active {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
      brightness(205%) contrast(100%);
    &:hover {
      filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
        brightness(205%) contrast(100%);
    }
  }
`;

export default NavBar;
