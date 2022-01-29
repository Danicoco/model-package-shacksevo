import { Schema, model } from 'mongoose';
import { IGame } from '../types';


const GameSchema: Schema = new Schema<IGame>({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    accessUrl: {
        type: String,
        required: true,
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
