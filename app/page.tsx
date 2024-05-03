"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const post = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/movies", {
      tranding: false,
      image,
      date,
      type,
      age,
      title,
    });
    console.log(response.data);
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
    </>
  );
};

export default Home;
