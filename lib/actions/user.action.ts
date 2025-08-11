"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

interface UserType {
  clerkId: string;
  email: string;
  username?: string;
  photo: string;
}

export async function createUser(user: UserType) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}