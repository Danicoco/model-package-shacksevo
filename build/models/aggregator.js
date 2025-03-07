"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AggregatorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
    },
    betId: {
        type: String,
        trim: true,
        ref: 'BetPlaceds'
    },
    roundId: {
        type: String,
        required: true,
        ref: 'GameRounds'
    },
    playerId: {
        type: String,
        required: true,
    },
    partnerId: {
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
    },
    betEndedAt: {
        type: Date,
    },
    meta: {
        type: "Map",
    },
    mode: {
        type: String,
        required: true,
    },
}, {
    collection: 'aggregators',
    versionKey: false
});
AggregatorSchema.set('timestamps', true);
AggregatorSchema.index({ roundId: 1, partnerId: 1, playerId: 1 }, { unique: true });
AggregatorSchema.index({ gameType: 1, betId: 1 }, { unique: true });
exports.default = (0, mongoose_1.model)('Aggregators', AggregatorSchema);
//# sourceMappingURL=aggregator.js.map