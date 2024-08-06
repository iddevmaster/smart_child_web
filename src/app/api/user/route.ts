import { NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function GET () {
  await dbConnect();

  try {
    const users = await User.find({}).populate('schoolId');
    console.log("querry users success.");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log("Error querry users: ", error);
    return NextResponse.json({ error: "Error querry users" }, { status: 500 });
  }
};