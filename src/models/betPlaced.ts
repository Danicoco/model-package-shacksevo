import { IBetPlaced } from '../../types';
import { Schema, Types, model } from 'mongoose';

const BetPlacedSchema: Schema = new Schema<IBetPlaced>({
    result: {
        type: String,
    },
    userId: {
        type: String,
    },
    gameType: {
        type: String,
    },
    username: {
        type: String,
    },
    type: {
        type: String,
    },
    partnerId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    gameRoundId: {
        type: Types.ObjectId,
        ref: 'gameRounds'
    },
    amountPlaced: {
        type: Number,
    },
    cashoutAmount: {
        type: Number
    },
    potentialWinning: {
        type: Number,
    },
    selectedEventType: {
        type: Array
    },
    playerDetails: {
        type: Object
    },
    betPlacedType: {
        type: String,
    }
}, {
    collection: 'betPlaceds',
    versionKey: false
});

BetPlacedSchema.set('timestamps', true);

export default model<IBetPlaced>('BetPlaceds', BetPlacedSchema);
