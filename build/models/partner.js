"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var stakesSchema = new mongoose_1.Schema({
    minimumStake: { type: Number, default: 10 },
    maximumStake: { type: Number, default: 5000 },
    gameType: { type: String, default: "cointoss" },
    maximumWinnableAmount: { type: Number, default: 20000 },
    minimumWinnableAmount: { type: Number, default: 0 },
});
var customizationSchema = new mongoose_1.Schema({
    stakes: stakesSchema,
    gameType: { type: String },
    promoAmount: { type: Number, default: 0 },
    showAbout: { type: Boolean, default: true },
    showBalance: { type: Boolean, default: true },
    showHistory: { type: Boolean, default: true },
    stakePercentage: { type: Number, default: 0 },
    numberOfBetPlaced: { type: Number, default: 0 },
    numberOfTimesPerDay: { type: Number, default: 0 },
    showBetAmountOption: { type: Boolean, default: true },
    isActive: { type: Boolean, required: true, default: true },
    stagingUrl: { type: String },
    productionUrl: { type: String },
});
var projectSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, auto: true },
    email: { type: String },
    name: { type: String },
    partnerUrl: { type: String },
    crashliteWebsocket: { type: String },
    buslyWebsocket: { type: String },
    isActive: { type: Boolean },
});
var permissionSchema = new mongoose_1.Schema({
    addPartner: { type: Boolean },
    getPartner: { type: Boolean },
    getGame: { type: Boolean },
    getBets: { type: Boolean },
    getReports: { type: Boolean },
});
var PartnerSchema = new mongoose_1.Schema({
    name: {
        // company name
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
        ref: "roles",
    },
    IAM: {
        type: String,
    },
    hashedId: {
        type: String,
    },
    baseUrl: {
        type: String,
    },
    status: {
        type: String,
        enum: ["test", "live"],
        default: "test",
    },
    callbackUrl: {
        type: String,
        default: null,
    },
    associatedId: {
        type: String,
    },
    webhookUrl: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        enum: ["aggregator", "thirdparty", "demo"],
        default: "thirdparty",
    },
    customization: [customizationSchema],
    stakesCustomization: [stakesSchema],
    partnerUrl: { type: "String" },
    gameWebsocket: { type: "String" },
    chatWebsocket: { type: "String" },
    projects: [projectSchema],
    permissions: permissionSchema
}, {
    collection: "partners",
    versionKey: false,
});
PartnerSchema.set("timestamps", true);
exports.default = (0, mongoose_1.model)("Partners", PartnerSchema);
//# sourceMappingURL=partner.js.map