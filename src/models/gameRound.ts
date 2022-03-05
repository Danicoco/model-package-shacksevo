
import { Schema, Types, model } from 'mongoose';
import { IGameRound } from '../../types';


const GameRoundSchema: Schema = new Schema<IGameRound>({
    eventTypes: {
        type: Array,
    },
    eventId: {
        type: String,
        required: true,
    },
    season: {
        type: Number,
    },
    day: {
        type: String,
    },
    isPlayed: {
        type: Boolean,
    },
    gameOdd: {
        type: String,
    },
    eventRanges: {
        type: Array
    },
    partnerId: {
        type: Types.ObjectId,
        ref: 'partner'
    },
    partnerName: {
        type: String,
    },
    algorithmUsed: {
        type: String
    },
    numberOfBetPlaced: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    collection: 'gameRound',
    versionKey: false
});

GameRoundSchema.set('timestamps', true);

export default model<IGameRound>('GameRounds', GameRoundSchema);
