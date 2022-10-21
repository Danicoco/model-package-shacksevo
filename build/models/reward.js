"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RewardSchema = new mongoose_1.Schema({
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
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
        type: Number
    }
}, {
    collection: 'rewards',
    versionKey: false
});
RewardSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('rewards', RewardSchema);
//# sourceMappingURL=reward.js.map