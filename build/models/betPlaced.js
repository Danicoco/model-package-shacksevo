"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BetPlacedSchema = new mongoose_1.Schema({
    result: {
        type: String,
    },
    userId: {
        type: String,
    },
    gameType: {
        type: String,
    },
    username: {
        type: String,
    },
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
    },
    gameRoundId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'gameRounds'
    },
    amountPlaced: {
        type: Number,
    },
    cashoutAmount: {
        type: Number
    },
    potentialWinning: {
        type: Number,
    },
    selectedEventType: {
        type: Array
    },
    playerDetails: {
        type: Object
    }
}, {
    collection: 'betPlaceds',
    versionKey: false
});
BetPlacedSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('BetPlaceds', BetPlacedSchema);
//# sourceMappingURL=betPlaced.js.map