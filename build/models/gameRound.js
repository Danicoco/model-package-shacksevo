"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GameRoundSchema = new mongoose_1.Schema({
    eventTypes: {
        type: Array,
    },
    eventId: {
        type: String,
        required: true,
    },
    gameOdd: {
        type: String,
    },
    eventRanges: {
        type: Array
    },
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partner'
    },
    partnerName: {
        type: String,
    },
    algorithmUsed: {
        type: String
    },
    numberOfBetPlaced: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    collection: 'gameRound',
    versionKey: false
});
GameRoundSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('GameRounds', GameRoundSchema);
//# sourceMappingURL=gameRound.js.map