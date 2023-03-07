"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var EveryMatrixSchema = new mongoose_1.Schema({
    partnerId: {
        type: mongoose_1.Types.ObjectId,
    },
    token: {
        type: String
    },
    gameId: {
        type: String
    },
    isFun: {
        type: Boolean
    },
    balance: {
        type: Number
    },
    currency: {
        type: String
    },
    username: {
        type: String
    },
    userId: {
        type: String
    },
    meta: {
        type: Object
    },
}, {
    collection: 'everyMatrix',
    versionKey: false
});
EveryMatrixSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('EveryMatrix', EveryMatrixSchema);
//# sourceMappingURL=everymatrix.js.map