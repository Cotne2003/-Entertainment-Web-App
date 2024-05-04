import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request).id;
    const user = await User.findById(userId)
      .populate("savedMovies")
      .select("-password");
    return NextResponse.json(user.savedMovies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
