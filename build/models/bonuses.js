"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BonusSchema = new mongoose_1.Schema({
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true
    },
    tornamentId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'tornaments'
    },
    gameType: {
        type: String,
        required: true
    },
    loyaltyPoints: {
        type: Number,
        default: 0,
    },
    bonusAmount: {
        type: Number,
        default: 0,
    },
    freebet: {
        type: Number,
        default: 0,
    }
}, {
    collection: 'bonuses',
    versionKey: false
});
BonusSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('bonuses', BonusSchema);
//# sourceMappingURL=bonuses.js.map