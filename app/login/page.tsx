"use client";

import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { StyledSection } from "@/styles/formStyles";

type DataType = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DataType>();
  const onSubmit = async () => {
    // try {
    //   const response = await axios.post("/api/users/login", {
    //     email: watch("email"),
    //     password: watch("password"),
    //   });
    //   console.log(response.data);
    //   router.push("/");
    // } catch (error: any) {
    //   console.log(error.message);
    // }
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
