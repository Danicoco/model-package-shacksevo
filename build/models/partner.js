"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PartnerSchema = new mongoose_1.Schema({
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
    gender: {
        type: String,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    noOfEmployees: {
        type: Number,
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
    },
    status: {
        type: String,
        enum: ['test', 'live'],
        default: 'test'
    },
    callbackUrl: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        enum: ['aggregator', 'thirdparty'],
        default: 'thirdparty',
    },
}, {
    collection: 'partners',
    versionKey: false
});
PartnerSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Partners', PartnerSchema);
//# sourceMappingURL=partner.js.map