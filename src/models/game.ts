import { Schema, model, Types } from 'mongoose';
import { IGame } from '../../types';


const GameSchema: Schema = new Schema<IGame>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    accessUrl: {
        type: String,
        required: true,
    },
    partnerId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    code: {
        type: String,
    },
    demoUrl: {
        type: String,
        required: true,
    },
    documentationUrl: {
        type: String,
    },
    integrationCount: {
        type: Number,
        default: 0,
        required: true,
    }
}, {
    collection: 'games',
    versionKey: false
});

GameSchema.set('timestamps', true);

export default model<IGame>('Games', GameSchema);
