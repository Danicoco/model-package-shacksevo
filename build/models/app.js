"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AppSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    gameType: {
        type: String,
        required: true,
    },
    partnerId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
    },
    partnerName: {
        type: String,
    }
}, {
    collection: 'apps',
    versionKey: false
});
AppSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Apps', AppSchema);
//# sourceMappingURL=app.js.map