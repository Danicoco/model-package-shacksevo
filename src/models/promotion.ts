import { Schema, model } from "mongoose";
import { IPromotion, IPromotionBet } from "../../types";

const PromotionBet = new Schema<IPromotionBet>({
  betId: { type: "String" },
  date: { type: "Date" },
});

const PromotionSchema: Schema = new Schema<IPromotion>(
  {
    isActive: {
      type: Boolean,
      required: true,
    },
    bets: [PromotionBet],
    gameType: {
      type: String,
      required: true,
    },
    partnerId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    collection: "promotions",
    versionKey: false,
  }
);

PromotionSchema.set("timestamps", true);

export default model<IPromotion>("Promotions", PromotionSchema);
