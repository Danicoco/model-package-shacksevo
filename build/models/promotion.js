"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PromotionBet = new mongoose_1.Schema({
    betId: { type: "String" },
    date: { type: "Date" },
});
var PromotionSchema = new mongoose_1.Schema({
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
}, {
    collection: "promotions",
    versionKey: false,
});
PromotionSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("Promotions", PromotionSchema);
//# sourceMappingURL=promotion.js.map