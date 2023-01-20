"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TornamentPlayersSchema = new mongoose_1.Schema({
    tornamentId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true
    },
    roundsPlayed: {
        type: Number,
        lastUpdate: Date,
    },
    sumOfBets: {
        type: Number,
        lastUpdate: Date,
    },
    sumOfWins: {
        type: Number,
        lastUpdate: Date,
    },
    winToBetRatio: {
        type: Number,
        lastUpdate: Date,
    },
    successRatio: {
        type: Number,
        lastUpdate: Date,
    }
}, {
    collection: 'tornamentPlayers',
    versionKey: false
});
TornamentPlayersSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('tornamentPlayers', TornamentPlayersSchema);
//# sourceMappingURL=tornamentPlayers.js.map