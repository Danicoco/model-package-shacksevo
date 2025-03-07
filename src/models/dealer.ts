import { Schema, model } from 'mongoose';
import { IDealer } from '../../types';

const DealerSchema: Schema = new Schema<IDealer>({
    playerId: {
        type: String,
        required: true,
    },
    playerToken: {
        type: String,
        required: true,
    },
    card: {
        type: String,
        required: true,
    },
    partnerId: {
        type: String,
        required: true,
    },
    hasEnded: {
        type: Boolean,
    },
    roundId: {
        type: String,
    },
    dateUsed: {
        type: "Date",
    },
    dateInitiated: {
        type: "Date",
    },
    meta: {
        type: "Map",
    },
}, {
    collection: 'dealers',
    versionKey: false
});

DealerSchema.set('timestamps', true);

export default model<IDealer>('Dealers', DealerSchema);
