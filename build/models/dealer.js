"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DealerSchema = new mongoose_1.Schema({
    playerId: {
        type: String,
        required: true,
    },
    playerToken: {
        type: String,
        required: true,
    },
    card: {
        type: String,
        required: true,
    },
    partnerId: {
        type: String,
        required: true,
    },
    hasEnded: {
        type: Boolean,
    },
    roundId: {
        type: String,
    },
    dateUsed: {
        type: "Date",
    },
    dateInitiated: {
        type: "Date",
    },
    meta: {
        type: "Map",
    },
}, {
    collection: 'dealers',
    versionKey: false
});
DealerSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Dealers', DealerSchema);
//# sourceMappingURL=dealer.js.map