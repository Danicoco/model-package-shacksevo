"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RewardSchema = new mongoose_1.Schema({
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: "partners",
    },
    userId: {
        type: String,
    },
    amount: {
        type: Number,
        default: 0
    },
    cashoutAmount: {
        type: Number,
        default: 0
    },
    rewardType: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    freeBetsAmount: {
        type: Number,
        default: 0,
    },
    loyaltyPercentage: {
        type: Number,
        default: 0,
    },
    multiplier: {
        type: Number,
    },
    duration: {
        type: Date,
    },
    startDate: {
        type: Date,
        default: Date.now(),
    },
    endDate: {
        type: Date,
        default: Date.now(),
    },
}, {
    collection: "rewards",
    versionKey: false,
});
RewardSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("rewards", RewardSchema);
//# sourceMappingURL=reward.js.map