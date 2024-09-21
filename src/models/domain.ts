import { Schema, model } from 'mongoose';
import { IDomain } from '../../types';

const DomainSchema: Schema = new Schema<IDomain>({
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

export default model<IDomain>('Domains', DomainSchema);
