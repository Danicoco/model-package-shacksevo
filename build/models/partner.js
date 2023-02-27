"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var stakesSchema = new mongoose_1.Schema({
    gameType: { type: String, },
    minimumStake: { type: Number, default: 10 },
    maximumStake: { type: Number, default: 5000 },
    maximumWinnableAmount: { type: Number, default: 20000 },
    minimumWinnableAmount: { type: Number, default: 0 }
});
var customizationSchema = new mongoose_1.Schema({
    stakes: stakesSchema,
    promoAmount: { type: Number, default: 0 },
    showAbout: { type: Boolean, default: true },
    showBalance: { type: Boolean, default: true },
    showHistory: { type: Boolean, default: true },
    stakePercentage: { type: Number, default: 0 },
    numberOfBetPlaced: { type: Number, default: 0 },
    numberOfTimesPerDay: { type: Number, default: 0 },
    showBetAmountOption: { type: Boolean, default: true },
    isActive: { type: Boolean, required: true, default: true },
});
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
    webhookUrl: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        enum: ['aggregator', 'thirdparty', 'demo'],
        default: 'thirdparty',
    },
    customization: [customizationSchema]
}, {
    collection: 'partners',
    versionKey: false
});
PartnerSchema.set('timestamps', true);
exports.default = (0, mongoose_1.model)('Partners', PartnerSchema);
//# sourceMappingURL=partner.js.map