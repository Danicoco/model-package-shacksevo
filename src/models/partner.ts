
import { Schema, Types, model } from 'mongoose';
import { IPartner, UsageCustomization } from '../../types';

const customizationSchema: Schema = new Schema<UsageCustomization>({
    isActive: { type: Boolean, required: true, default: true },
    showAbout: { type: Boolean, default: true },
    promoAmount: { type: Number, default: 0 },
    showBalance: { type: Boolean, default: true },
    showHistory: { type: Boolean, default: true },
    stakePercentage: { type: Number, default: 0 },
    numberOfBetPlaced: { type: Number, default: 0 },
    numberOfTimesPerDay: { type: Number, default: 0 },
    showBetAmountOption: { type: Boolean, default: true },
});

const PartnerSchema: Schema = new Schema<IPartner>({
    name: { // company name
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
        type: Types.ObjectId,
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

export default model<IPartner>('Partners', PartnerSchema);
