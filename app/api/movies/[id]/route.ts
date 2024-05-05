import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import Movie from "@/models/movieModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, context: any) {
  try {
    const isAuthorized = await getDataFromToken(request);
    if (isAuthorized) {
      const { params } = context;
      const movie = await Movie.findById(params.id);
      if (!movie) {
        return NextResponse.json({ error: "movie not found" }, { status: 400 });
      } else {
        return NextResponse.json(movie);
      }
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, context: any) {
  try {
    const userId = await getDataFromToken(request).id;
    if (userId) {
      const { params } = context;
      const user = await User.findById(userId);
      const movie = await Movie.findById(params.id);
      if (!movie) {
        return NextResponse.json({ error: "movie not found" }, { status: 400 });
      }
      const movieIndex = user.savedMovies.indexOf(movie._id);
      if (movieIndex === -1) {
        user.savedMovies.push(movie._id);
        await user.save();
        return NextResponse.json({ message: "movie saved" }, { status: 201 });
      } else {
        user.savedMovies.splice(movieIndex, 1);
        await user.save();
        return NextResponse.json(
          { error: "Movie deleted successfully" },
          { status: 202 }
        );
      }
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
