import { Schema, Types, model } from "mongoose";
import { IUser } from "../../types";

const UserSchema: Schema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
    },
    otp: String,
    gameType: {
      type: String,
    },
    username: String,
    partnerId: {
      type: Types.ObjectId,
      ref: "partners",
    },
    partnerName: {
      type: String,
    },
    partnerUserId: {
      type: String,
    },
    lastPlayed: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "users",
    versionKey: false,
  }
);

UserSchema.set("timestamps", true);

export default model<IUser>("Users", UserSchema);
