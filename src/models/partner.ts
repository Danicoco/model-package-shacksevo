
import { Schema, Types, model } from 'mongoose';
import { IPartner } from '../../types';


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
    type: {
        type: String,
        enum: ['aggregator', 'thirdparty', 'demo'],
        default: 'thirdparty',
    },
}, {
    collection: 'partners',
    versionKey: false
});

PartnerSchema.set('timestamps', true);

export default model<IPartner>('Partners', PartnerSchema);
