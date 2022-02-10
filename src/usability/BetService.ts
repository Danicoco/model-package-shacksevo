import { BetPlaced } from '../models';
import { IBetPlaced } from '../types';


class BetPlacedService {
    private partnerId: string | null;
    private _id: string | null;

    constructor(_id: string | null, partnerId: string | null) {
        this._id = _id;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<IBetPlaced>) {
        try {
            const betPlaced = new BetPlaced({ ...params });
            await betPlaced.save();
            return betPlaced;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne() {
        const betPlaced = await BetPlaced
            .findOne()
            .where(this._id ? '_id' : 'partnerId')
            .equals(this._id ? this._id : this.partnerId)
            .catch((e) => {
                throw new Error(e.message);
            });
        return betPlaced;
    }

    public async findAll() {
        const betPlaceds = await BetPlaced
            .find()
            .catch((e) => {
                throw new Error(e.message)
            });
        return betPlaceds;
    }
    
    public async deleteOne() {
        const betPlaced = await BetPlaced
            .findOneAndDelete()
            .where(this._id ? "_id": "partnerId")
            .equals(this._id ? this._id : this.partnerId)
            .catch((e) => {
                throw new Error(e.message);
            });

        return betPlaced;
    }

    public async updateOne(params: IBetPlaced) {
        const betPlaced = await BetPlaced.findOneAndUpdate(
            { _id: this._id },
            { ...params },
            { new: true },
        ).catch((e) => {
            throw new Error(e.message);
        });
        
        return betPlaced;
    }
}

export default BetPlacedService;