import { Schema, Types, model } from 'mongoose';
import { IApp } from '../types';


const AppSchema: Schema = new Schema<IApp>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    gameType: {
        type: String,
        required: true,
    },
    partnerId: {
        type: Types.ObjectId,
        required: true,
    },
    partnerName: {
        type: String,
    }
}, {
    collection: 'apps',
    versionKey: false
});

AppSchema.set('timestamps', true);

export default model<IApp>('Apps', AppSchema);
