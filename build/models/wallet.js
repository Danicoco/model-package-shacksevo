"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WalletSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users',
    },
    amount: {
        type: String,
        required: true,
    },
    lastTransactionDate: {
        type: String
    }
}, {
    collection: 'wallets',
    versionKey: false
});
WalletSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Wallets', WalletSchema);
//# sourceMappingURL=wallet.js.map