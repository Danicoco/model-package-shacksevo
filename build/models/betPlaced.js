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
    type: {
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
        type: []
    },
    playerDetails: {
        type: Object
    },
    betPlacedType: {
        type: String,
    },
    currency: {
        type: String,
    }
}, {
    collection: 'betPlaceds',
    versionKey: false
});
BetPlacedSchema.set('timestamps', true);
BetPlacedSchema.index({ gameRoundId: 1, partnerId: 1, userId: 1 });
var BetPlacedModel = (0, mongoose_1.model)('BetPlaceds', BetPlacedSchema);
// BetPlacedModel.watch([], { fullDocument: "updateLookup" }).on("change", async (changeEvent) => new DashboardService({}).logChanges(changeEvent));
exports.default = BetPlacedModel;
//# sourceMappingURL=betPlaced.js.map