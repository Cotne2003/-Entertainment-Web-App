"use client";

import { StyledSection } from "@/styles/formStyles";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <StyledSection>
      <div className="content-wrapper">
        <Image src={logo} alt="logo" width={32} height={25} />
        <div className="login-content">
          <h1>Sign Up</h1>
          <form action="">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
            <button type="submit">Create an account</button>
          </form>
          <p>
            Alread have an account? <Link href="login">Login</Link>
          </p>
        </div>
      </div>
    </StyledSection>
  );
};

export default SignUp;
