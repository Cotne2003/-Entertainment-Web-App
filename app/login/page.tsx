"use client";

import Image from "next/image";
import React from "react";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { StyledSection } from "@/styles/formStyles";

const Login = () => {
  return (
    <StyledSection>
      <div className="content-wrapper">
        <Image src={logo} alt="logo" width={32} height={25} />
        <div className="login-content">
          <h1>Login</h1>
          <form action="">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login to your account</button>
          </form>
          <p>
            Don’t have an account? <Link href="sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </StyledSection>
  );
};

export default Login;
