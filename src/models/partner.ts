
import { Schema, Types, model } from 'mongoose';
import { IPartner, IStakesCustomization, UsageCustomization } from '../../types';

const stakesSchema: Schema = new Schema<IStakesCustomization>({
    minimumStake: { type: Number, default: 10 },
    maximumStake: { type: Number, default: 5000 },
    gameType: { type: String, default: 'cointoss' },
    maximumWinnableAmount: { type: Number, default: 20000 },
    minimumWinnableAmount: { type: Number, default: 0 }
})

const customizationSchema: Schema = new Schema<UsageCustomization>({
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
    customization: [customizationSchema],
    stakesCustomization: [stakesSchema]
}, {
    collection: 'partners',
    versionKey: false
});

PartnerSchema.set('timestamps', true);

export default model<IPartner>('Partners', PartnerSchema);
