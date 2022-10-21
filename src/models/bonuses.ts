import { Schema, model, Types } from 'mongoose';
import { IBonus } from 'model-package-shacksevo/types';


const BonusSchema: Schema = new Schema<IBonus>({
    partnerId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true
    },
    gameType:{
        type: String,
        required: true
    },
    loyaltyPoints: {
        type: Number,
        default: 0,
    },
    bonusAmount: {
        type: Number,
        default: 0,
    },
    freebet: {
        type: Number,
        default: 0,
    }
}, {
    collection: 'bonuses',
    versionKey: false
});

BonusSchema.set('timestamps', true);

export default model<IBonus>('bonuses', BonusSchema);
