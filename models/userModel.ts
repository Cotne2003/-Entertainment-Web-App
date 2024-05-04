import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  savedMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
