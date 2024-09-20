"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DomainSchema = new mongoose_1.Schema({
    callbackUrl: {
        type: String,
        trim: true,
    },
    webhookUrl: {
        type: String,
        trim: true,
    },
    partnerId: {
        type: String,
        required: true,
    },
}, {
    collection: 'domains',
    versionKey: false
});
DomainSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Domains', DomainSchema);
//# sourceMappingURL=domain.js.map