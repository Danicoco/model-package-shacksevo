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
        type: Number
    },
    sumOfBets: {
        type: Number
    },
    sumOfWins: {
        type: Number
    },
    winToBetRatio: {
        type: Number
    },
    successRatio: {
        type: Number
    }
}, {
    collection: 'tornamentPlayers',
    versionKey: false
});
TornamentPlayersSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('tornamentPlayers', TornamentPlayersSchema);
//# sourceMappingURL=tornamentPlayers.js.map