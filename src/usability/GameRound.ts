import { IGameRound, IPaginator } from "../../types";
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
    year: string;

    constructor(_id = '', partnerId = '', year = '') {
        this.partnerId = partnerId;
        this._id = _id;
        this.year = year;
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

    public async bulkCreate(params: Partial<IGameRound>[]) {
        const rounds = await GameRound
            .insertMany(params)
            .catch((e: any) => {
                throw new Error(e)
            });
        return rounds;
    }

    public async findOne() {
        const round = await GameRound
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => { throw new Error(e) });
        return round;
    }

    public async findAll(limit: number) {
        const rounds = await GameRound
            .find()
            .where(this.partnerId && "partnerId")
            .equals(this.partnerId && this.partnerId)
            .limit(limit)
            .catch((e: any) => { throw new Error(e) });
        return rounds;
    }

    public async findAllByCondition({ sort, limit, condition }: IPaginator) {
        const rounds = await GameRound
            .find(condition)
            .sort(sort)
            .limit(limit)
            .catch((e: any) => { throw new Error(e) });
        return rounds;
    }

    public async findAllAdmin() {
        const rounds = await GameRound
            .find()
            .catch((e: any) => { throw new Error(e) });
        return rounds;
    }

    public async findByYear() {
        const rounds = await GameRound
            .find()
            .where('partnerId')
            .equals(this.partnerId)
            .where('season')
            .equals(Number(this.year))
            .catch((e: any) => { throw new Error(e)});
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
        const round = await GameRound.find().sort({_id:-1}).limit(1);
        return round;
    }

    public async findOneFirst() {
        const round = await GameRound
            .findOne()
            .where('partnerId')
            .equals(this.partnerId)
            .catch((e: any) => { throw new Error(e) });
        return round;
    }

    public async findByIsPlayed(params: boolean) {
        const round = await GameRound
            .findOne()
            .where('partnerId')
            .equals(this.partnerId)
            .where('isPlayed')
            .equals(params)
            .catch((e: any) => { throw new Error(e) });
        return round;
    }

    public async deleteAll() {
        await GameRound.deleteOne({ _id: this._id }).catch((e: any) => { throw new Error(e)});
        return true;
    }

    public async deleteByPartnerId() {
        await GameRound.deleteMany({ partnerId: this.partnerId }).catch((e: any) => { throw new Error(e) });
        return true;
    }
}

export default GameRoundService;
