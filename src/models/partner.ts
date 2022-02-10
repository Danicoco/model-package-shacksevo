
import { Schema, Types, model } from 'mongoose';
import { IPartner } from '../../types';


const PartnerSchema: Schema = new Schema<IPartner>({
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
        type: Types.ObjectId,
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

export default model<IPartner>('Partners', PartnerSchema);
