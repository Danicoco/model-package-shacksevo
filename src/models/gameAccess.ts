
import { Schema, Types, model } from 'mongoose';
import { IGameAccess } from '../types';


const GameAccessSchema: Schema = new Schema<IGameAccess>({
    partnerId: {
        type: Types.ObjectId,
        required: true,
    },
    partnerName: {
        type: String,
    },
    partnerEmail: {
        type: String,
    },
    gameId: {
        type: Types.ObjectId,
    },
    gameName: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
}, {
    collection: 'gameAccess',
    versionKey: false
});

GameAccessSchema.set('timestamps', true);

export default model<IGameAccess>('GameAccesss', GameAccessSchema);
