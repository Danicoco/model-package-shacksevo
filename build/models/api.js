"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const APISchema = new mongoose_1.Schema({
    publicKey: {
        type: String,
        required: true,
    },
    secretKey: {
        type: String,
        required: true,
    },
    partnerId: {
        type: mongoose_1.Types.ObjectId,
    },
    associatedGames: {
        type: Number
    },
    numOfTimesGenerated: {
        type: Number
    }
}, {
    collection: 'apis',
    versionKey: false
});
APISchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('APIs', APISchema);
//# sourceMappingURL=api.js.map