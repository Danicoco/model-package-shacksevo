"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PartnerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
    },
    roleId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'roles',
    },
    IAM: {
        type: String,
    }
}, {
    collection: 'partners',
    versionKey: false
});
PartnerSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Partners', PartnerSchema);
//# sourceMappingURL=partner.js.map