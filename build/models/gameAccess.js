"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GameAccessSchema = new mongoose_1.Schema({
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
    },
    partnerName: {
        type: String,
    },
    partnerEmail: {
        type: String,
    },
    gameId: {
        type: String,
    },
    url: {
        type: String,
    },
    assets: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    isActive: {
        type: Boolean,
    }
}, {
    collection: 'gameAccess',
    versionKey: false
});
GameAccessSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('GameAccesss', GameAccessSchema);
//# sourceMappingURL=gameAccess.js.map