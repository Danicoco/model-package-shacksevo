import { Schema, model, Types } from 'mongoose';
import { IReward } from '../../types';


const RewardSchema: Schema = new Schema<IReward>({
    partnerId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    rewardType: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    freeBetsAmount: {
        type:Number,
        default: 0,
    },
    loyaltyPercentage: {
        type: Number,
        default: 0,
    },
    multiplier: {
        type:Number
    },
    duration: {
        type: Date,
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
}, {
    collection: 'rewards',
    versionKey: false
});

RewardSchema.set('timestamps', true);

export default model<IReward>('rewards', RewardSchema);
