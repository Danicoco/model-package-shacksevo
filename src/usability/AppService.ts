import { APP } from '../models';
import { IApp} from '../../types';


class AppService {
    private partnerId: string | null;
    private _id: string | null;

    constructor(_id: string | null, partnerId: string | null) {
        this._id = _id;
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