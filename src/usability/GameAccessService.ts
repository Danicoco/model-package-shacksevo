import { GameAccess } from '../models';
import { IGameAccess} from '../../types';


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

    public async findOne(select?: string) {
        const gameAccess = await GameAccess
            .findOne()
            .select(select || '')
            .where(this._id ? '_id' : 'partnerId')
            .equals(this._id ? this._id : this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return gameAccess;
    }

    public async findAll(select?: string) {
        const gameAccesss = await GameAccess
            .find()
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
}

export default GameAccessService;
