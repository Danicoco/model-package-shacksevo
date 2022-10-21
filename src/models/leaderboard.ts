import { Schema, model, Types } from 'mongoose';
import { ILeaderboard } from '../../types';


const LeaderboardSchema: Schema = new Schema<ILeaderboard>({
    tornamentId: {
        type: Types.ObjectId,
        ref: 'partners'
    },
    username: {
        type: String,
        required: true,
    }
}, {
    collection: 'leaderboard',
    versionKey: false
});

LeaderboardSchema.set('timestamps', true);

export default model<ILeaderboard>('leaderboard', LeaderboardSchema);
