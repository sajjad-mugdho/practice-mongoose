import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },

  name: {
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  contractNo: {
    type: Number,
    required: true,
  },
});
const User = model<IUser>("User", userSchema);

export default User;
