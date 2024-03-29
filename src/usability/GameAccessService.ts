import { GameAccess } from '../models';
import { IGameAccess} from '../../types';
import { ClientSession } from 'mongoose';


class GameAccessService {
    private partnerId: string | null;
    private _id: string | null;

    constructor(_id: string | null, partnerId: string | null) {
        this._id = _id;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<IGameAccess>) {
        try {
            const gameAccess = new GameAccess({ ...params });
            await gameAccess.save();
            return gameAccess;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async insert(params: Partial<IGameAccess>[], session?: ClientSession) {
        try {
            const gameAccess = await GameAccess.insertMany(params, { session });
            return gameAccess;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne(select?: string) {
        const gameAccess = await GameAccess
            .findOne({
                ...(this._id && { _id: this._id }),
                ...(this.partnerId && { partnerId: this.partnerId }),
            })
            .select(select || '')
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return gameAccess;
    }

    public async findAll(select?: string) {
        const gameAccesss = await GameAccess
            .find({
                ...(this._id && { _id: this._id }),
                ...(this.partnerId && { partnerId: this.partnerId }),
            })
            .select(select || '')
            .catch((e: any) => {
                throw new Error(e.message)
            });
        return gameAccesss;
    }

    public async deleteOne() {
        const gameAccess = await GameAccess
            .findOneAndDelete()
            .where(this._id ? "_id": "partnerId")
            .equals(this._id ? this._id : this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });

        return gameAccess;

    }

    public async deleteByPartnerId() {
        const game = await GameAccess.deleteMany({ ...(this.partnerId && { partnerId: this.partnerId }) });
        return game;
    }

    public async deleteAll() {
        const game = await GameAccess.deleteMany({});
        return game;
    }
}

export default GameAccessService;
