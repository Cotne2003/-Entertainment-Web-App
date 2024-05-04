"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type movieData = {
  title: string;
  image: string;
  date: string;
  type: string;
  age: string;
  tranding: boolean;
  _id: string;
};

const Home = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);

  const [data, setData] = useState<movieData[]>([]);
  const [userInfo, setUserInfo] = useState<movieData[]>([]);

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/movies", {
      tranding: false,
      image,
      date,
      type,
      age,
      title,
    });
  };

  useEffect(() => {
    const dataComing = async () => {
      const response = await axios.get("/api/movies");
      setData(response.data);
    };
    dataComing();
    const userInfoComing = async () => {
      const response = await axios.get("/api/users/me");
      setUserInfo(response.data);
    };
    userInfoComing();
  }, []);

  const saveMovie = async (id: string) => {
    try {
      await axios.post(`/api/movies/${id}`, {});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
      <form
        onSubmit={(e) => post(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {data.map((movie) => (
          <div key={movie._id} style={{ display: "flex", gap: "30px" }}>
            <h2 style={{ color: "white" }}>{movie.title}</h2>
            <Image src={movie.image} alt="photo" width={80} height={50} />
            <button onClick={() => saveMovie(movie._id)}>save</button>
          </div>
        ))}
      </div>
      <div style={{ color: "white", marginTop: "30px" }}>
        <h2>saved movies</h2>
        {userInfo.map((movie) => (
          <p>{movie._id}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
