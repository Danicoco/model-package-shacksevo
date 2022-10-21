import { Reward } from '../models';
import { IReward } from '../../types';
import { ObjectId } from 'mongoose';

class RewardService {
    _id = "";
    partnerId?: ObjectId;

    constructor( _id = "", partnerId?: ObjectId) {
        this._id = _id;
        this.partnerId = partnerId;
    }

    public async setReward(params: Partial<IReward>) {
        try {
            const reward = Reward.find()
            reward.update({ ...params });
            // reward.save();
            return reward;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async getReward() {
        const reward = await Reward.find()
            
        return reward;
    }

}
export default RewardService;
