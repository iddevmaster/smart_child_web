import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../lib/mongodb";
import School from "../../../../../models/school";

export async function POST(req: Request) {
  try {
    const { schoolName, address, phoneNumber, email, pageUrl } = await req.json();

    await dbConnect();

    const school = new School({
      name: schoolName,
      address,
      phone: phoneNumber,
      email,
      pageUrl,
    });

    await school.save();

    return NextResponse.json("School was saved.", { status: 201 });
  } catch (error) {
    console.log("Error creating school: ", error);
    return NextResponse.json({ error: "Error creating school" }, { status: 500 });
  }
}
