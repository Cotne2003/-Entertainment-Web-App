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
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  return (
    <StyledNav>
      <div className="wrapper">
        <Image src={logo} alt="logo" width={25} height={20} />
        <div className="nav-container">
          <Link href={"/"}>
            <Image
              src={shape}
              alt=""
              className={path === "/" ? "active" : ""}
              width={16}
              height={16}
            />
          </Link>
          <Link href={"/movies"}>
            <Image
              src={shape4}
              alt=""
              className={path === "/movies" ? "active" : ""}
              width={16}
              height={16}
            />
          </Link>
          <Link href={"/tv-series"}>
            <Image
              src={tv}
              alt=""
              className={path === "/tv-series" ? "active" : ""}
              width={16}
              height={16}
            />
          </Link>
          <Link href={"/bookmarked"}>
            <Image
              src={bookmark}
              alt=""
              className={path === "/bookmarked" ? "active" : ""}
              width={16}
              height={16}
            />
          </Link>
        </div>
        <Image
          src={profile}
          alt="profile"
          className="profile-img"
          width={24}
          height={24}
        />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #161d2f;
  padding: 20px 0px;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 343px;
    margin: 0 auto;
    .nav-container {
      display: flex;
      gap: 20px;
      align-items: center;
      img {
        margin-top: 3px;
      }
    }
    .profile-img {
      border-radius: 13px;
      outline: 1px solid #fc4747;
    }
  }
  /* img {
    &:hover {
      filter: invert(41%) sepia(82%) saturate(3512%) hue-rotate(337deg)
      brightness(107%) contrast(98%);
    }
  } */
  .active {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(257deg)
      brightness(205%) contrast(100%);
  }
`;

export default NavBar;
