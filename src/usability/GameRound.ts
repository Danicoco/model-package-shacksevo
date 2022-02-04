import { IGameRound } from "../types";
import { GameRound } from '../models';

class GameRoundService {
    _id = "";
    eventId = "";
    gameOdd = "";
    createdAt = "";
    updatedAt = "";
    eventTypes = [];
    eventRanges = [];
    partnerName = "";
    algorithmUsed = "";
    partnerId = "";
    numberOfBetPlaced = 0;

    constructor(_id = '', partnerId = '') {
        this.partnerId = partnerId;
        this._id = _id;
    }

    public async create(params: Partial<IGameRound>) {
        try {
            const round = new GameRound({ ...params });
            await round.save();
            return round;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const round = await GameRound
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e) => { throw new Error(e) });
        return round;
    }

    public async findAll() {
        const rounds = await GameRound
            .find()
            .where(this.partnerId && "partnerId")
            .equals(this.partnerId && this.partnerId)
            .catch((e) => { throw new Error(e) });
        return rounds;
    }

    public async updateOne(params: Partial<IGameRound>) {
        const round = await GameRound
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return round;
    }

    public async last() {
        const round = await GameRound
            .findOne({
                $query: {}, 
                $orderby: {$natural : -1}
            });
        return round;
    }
}

export default GameRoundService;