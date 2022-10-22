import { APP } from '../models';
import Pagionation from './Pagination';
import { IApp, IPaginator} from '../../types';


class AppService {
    private gameType: string;
    private _id: string | null;
    private partnerId: string | null;

    constructor(_id: string | null, partnerId: string | null, gameType = '') {
        this._id = _id;
        this.gameType = gameType;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<IApp>) {
        try {
            const app = new APP({ ...params });
            await app.save();
            return app;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOrCreate(params?: IApp) {
        const app = await APP.findOne({
            ...(this._id && { _id: this._id }),
            ...(this.gameType && { gameType: this.gameType }),
            ...(this.partnerId && { partnerId: this.partnerId }),
        }).catch(e => { throw e; });

        if (!app) {
            const app = await APP.create(params).catch(e => { throw e; });
            return app;
        }

        return app;
    }

    public async findOne() {
        const app = await APP
            .findOne()
            .where(this._id ? '_id' : 'partnerId')
            .equals(this._id ? this._id : this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return app;
    }

    public async findAll() {
        const apps = await APP
            .find()
            .catch((e: any) => {
                throw new Error(e.message)
            });
        return apps;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const apps = await APP
        .find({
            ...(condition && condition)
        })
        .sort(sort)
        .limit(limit)
        .skip(limit * (page - 1))
        .catch((e) => {
          throw e;
        });

        return {
            data: apps,
            pagination: Pagionation.builder(apps, count, { page, limit }),
        }
    }

    public async count(condition?: any) {
        const docs = await APP.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async deleteOne() {
        const app = await APP
            .findOneAndDelete()
            .where(this._id ? "_id": "partnerId")
            .equals(this._id ? this._id : this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });

        return app;

    }
}

export default AppService;
