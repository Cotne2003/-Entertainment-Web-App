import { connect } from "@/dbConfig/dbConfig";
import Movie from "@/models/movieModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { image, date, type, age, title, tranding } = reqBody;

    const movie = await Movie.findOne({ title });
    if (movie) {
      return NextResponse.json(
        {
          error: "Movie already exists",
        },
        { status: 400 }
      );
    }
    const newMovie = new Movie({
      image,
      date,
      type,
      age,
      title,
      tranding,
    });
    await newMovie.save();
    return NextResponse.json(
      { message: "Movie created", success: true },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
