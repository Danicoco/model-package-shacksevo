import { Schema, Types, model } from "mongoose";
import { ISpinRecord } from "../../types";

const SpinRecordSchema: Schema = new Schema<ISpinRecord>(
  {
    userId: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
    cashoutAmount: Number,
    balance: {
      type: Number,
      required: true,
    },
    partner: {
      type: String,
    },
    outcome: {
      type: String,
      required: true,
    },
  },
  {
    collection: "spinRecords",
    versionKey: false,
  }
);

SpinRecordSchema.set("timestamps", true);

export default model<ISpinRecord>("SpinRecords", SpinRecordSchema);
