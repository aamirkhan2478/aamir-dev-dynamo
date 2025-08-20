import { NextResponse as res } from "next/server";
import connectDB from "@/utils/mongoose";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import User from "@/models/User";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { email, password } = body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await compare(password, user.password);
      if (email === user.email) {
        if (!isMatch) {
          return res.json(
            {
              success: false,
              error: "Invalid Credentials",
              status: 400,
            },
            { status: 400 }
          );
        }
        var token = sign(
          { email: user.email, name: user.name },
          process.env.JWT_TOKEN_SECRET,
          { expiresIn: "2d" }
        );
        return res.json(
          {
            success: true,
            token,
            status: 200,
          },
          { status: 200 }
        );
      } else {
        return res.json(
          {
            success: false,
            error: "Invalid Credentials",
            status: 400,
          },
          { status: 400 }
        );
      }
    } else {
      return res.json(
        {
          success: false,
          error: "No User Found",
          status: 400,
        },
        { status: 400 }
      );
    }
  } catch (err) {
    console.log(err.message);
    return res.json({ error: "Server error", status: 500 }, { status: 500 });
  }
}
