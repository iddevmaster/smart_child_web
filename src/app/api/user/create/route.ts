import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { prefix, username, password, firstName, lastName, school, phone } = await req.json();

    const hashedPassword = await bcrypt.hashSync(password, 10);

    await dbConnect();

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ message: "Username already exists" }, { status: 400 });
    }

    const user = new User({
      prefix,
      username,
      password: hashedPassword,
      first_name: firstName,
      last_name: lastName,
      schoolId: school,
      phone,
      role: "teacher",
    });

    await user.save();

    return NextResponse.json("User was saved.", { status: 201 });
  } catch (error) {
    console.log("Error creating user: ", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
