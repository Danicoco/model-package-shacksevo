import { Schema, model, Types } from 'mongoose';
import { ITornamentPlayers } from '../../types';


const TornamentPlayersSchema: Schema = new Schema<ITornamentPlayers>({
    tornamentId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true
    },
    roundsPlayed: {
        type: Number,
        lastUpdate: Date,
    },
    sumOfBets: {
        type: Number,
        lastUpdate: Date,
    },
    sumOfWins: {
        type: Number,
        lastUpdate: Date,
    },
    winToBetRatio: {
        type: Number,
        lastUpdate: Date,
    },
    successRatio: {
        type: Number,
        lastUpdate: Date,
    }
}, {
    collection: 'tornamentPlayers',
    versionKey: false
});

TornamentPlayersSchema.set('timestamps', true);

export default model<ITornamentPlayers>('tornamentPlayers', TornamentPlayersSchema);
