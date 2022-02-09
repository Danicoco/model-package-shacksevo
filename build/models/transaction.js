"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TransactionSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users',
    },
    amount: {
        type: String,
        required: true,
    },
    gameType: {
        type: String,
    },
    gameId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'games'
    },
    gameOutcome: {
        type: String,
    }
}, {
    collection: 'transactions',
    versionKey: false
});
TransactionSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Transactions', TransactionSchema);
//# sourceMappingURL=transaction.js.map