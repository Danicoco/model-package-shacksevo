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
        type: []
    },
    playerDetails: {
        type: Object
    },
    betPlacedType: {
        type: String,
    },
    currency: {
        type: String,
    }
}, {
    collection: 'betPlaceds',
    versionKey: false
});

BetPlacedSchema.set('timestamps', true);
BetPlacedSchema.index({ gameRoundId: 1, partnerId: 1, userId: 1 })

const BetPlacedModel = model<IBetPlaced>('BetPlaceds', BetPlacedSchema);
// BetPlacedModel.watch([], { fullDocument: "updateLookup" }).on("change", async (changeEvent) => new DashboardService({}).logChanges(changeEvent));

export default BetPlacedModel
