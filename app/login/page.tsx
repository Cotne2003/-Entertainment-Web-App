"use client";

import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { StyledSection } from "@/styles/formStyles";
import { toast } from "react-toastify";
import { useState } from "react";

type DataType = {
  email: string;
  password: string;
};

const Login = () => {
  const [lodaing, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DataType>();
  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.API_BASE_URL}/api/users/login`,
        {
          email: watch("email"),
          password: watch("password"),
        }
      );
      router.push("/");
    } catch (error: any) {
      const axiosErr = error as AxiosError;
      if (axiosErr.response?.status === 401) {
        toast.error("Password is incorrect");
      } else if (axiosErr.response?.status === 400) {
        toast.error("User is not authorized");
      } else {
        toast.error("Server error. Please try again later");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <StyledSection>
      <div className="content-wrapper">
        <Image src={logo} alt="logo" width={32} height={25} />
        <div className="login-content">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="error-parent">
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Can’t be empty",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "This is not an email",
                  },
                })}
                style={
                  errors.email?.message ? { borderBottom: "1px solid red" } : {}
                }
              />
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>
            <div className="error-parent">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Can’t be empty",
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters",
                  },
                })}
                style={
                  errors.password?.message
                    ? { borderBottom: "1px solid red" }
                    : {}
                }
              />
              {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <button type="submit">
              {lodaing ? (
                <div className="wrapper">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
                </div>
              ) : (
                "Login to your account"
              )}
            </button>
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
