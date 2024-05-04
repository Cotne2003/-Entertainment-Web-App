import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const isAuthorization = await getDataFromToken(request);
    if (isAuthorization) {
      const users = await User.find({});
      return NextResponse.json({ users });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
