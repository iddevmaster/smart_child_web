import { NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/mongodb";
import School from "../../../../models/school";

export async function GET () {
  await dbConnect();

  try {
    const schools = await School.find({});
    console.log("querry schools success.");
    return NextResponse.json(schools, { status: 200 });
  } catch (error) {
    console.log("Error querry schools: ", error);
    return NextResponse.json({ error: "Error querry schools" }, { status: 500 });
  }
};