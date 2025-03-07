
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
    playerId: {
        type: String,
        required: true,
    },
    gameType: {
        type: String,
        required: true,
    },
    hasEnded: {
        type: Boolean,
        required: true,
        default: false,
    },
    sessionId: {
        type: String,
        required: true,
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
    crashRoundId: {
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
    betId: {
        type: String,
        ref: 'BetPlaceds'
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
