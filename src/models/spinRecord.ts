import { Schema, Types, model } from "mongoose";
import { ISpinRecord } from "../../types";

const SpinRecordSchema: Schema = new Schema<ISpinRecord>(
  {
    userId: {
      type: String,
      required: true,
    },
    cashoutAmount: Number,
    partnerId: {
      type: Types.ObjectId,
      ref: "partners",
      required: true,
    },
    outcome: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
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
