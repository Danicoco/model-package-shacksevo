import { Schema, model, Types } from 'mongoose';
import { ITornamentPlayers } from 'model-package-shacksevo/types';


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
        type: Number
    },
    sumOfBets: {
        type: Number
    },
    sumOfWins: {
        type: Number
    },
    winToBetRatio: {
        type: Number
    },
    successRatio: {
        type: Number
    }
}, {
    collection: 'tornamentPlayers',
    versionKey: false
});

TornamentPlayersSchema.set('timestamps', true);

export default model<ITornamentPlayers>('tornamentPlayers', TornamentPlayersSchema);
