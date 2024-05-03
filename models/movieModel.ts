import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  image: String,
  date: String,
  type: String,
  age: String,
  title: String,
  tranding: { type: Boolean, required: true },
});

const Movie = mongoose.models.movies || mongoose.model("movies", MovieSchema);

export default Movie;
