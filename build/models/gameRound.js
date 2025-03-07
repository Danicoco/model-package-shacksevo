"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GameRoundSchema = new mongoose_1.Schema({
    eventTypes: {
        type: Array,
    },
    eventId: {
        type: String,
        required: true,
    },
    season: {
        type: Number,
    },
    playerId: {
        type: String,
        required: true,
    },
    gameType: {
        type: String,
        required: true,
    },
    hasEnded: {
        type: Boolean,
        required: true,
        default: false,
    },
    sessionId: {
        type: String,
        required: true,
    },
    day: {
        type: String,
    },
    isPlayed: {
        type: Boolean,
    },
    gameOdd: {
        type: String,
    },
    crashRoundId: {
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
    betId: {
        type: String,
        ref: 'BetPlaceds'
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