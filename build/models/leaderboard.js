"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var LeaderboardSchema = new mongoose_1.Schema({
    tornamentId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true,
    },
    point: {
        type: Number,
    },
}, {
    collection: 'leaderboard',
    versionKey: false
});
LeaderboardSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('leaderboard', LeaderboardSchema);
//# sourceMappingURL=leaderboard.js.map