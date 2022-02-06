import { API } from '../models';
import { IAPI} from '../types';


class APIService {
    private partnerId: string | null;
    private _id: string | null;

    constructor(_id: string | null, partnerId: string | null) {
        this._id = _id;
        this.partnerId = partnerId;
    }

    public async create(params: Partial<IAPI>) {
        try {
            const api = new API({ ...params });
            await api.save();
            return api;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne() {
        const api = await API
            .findOne()
            .where(this._id ? '_id' : 'partnerId')
            .equals(this._id ? this._id : this.partnerId)
            .catch((e) => {
                throw new Error(e.message);
            });
        return api;
    }

    public async findAll() {
        const apis = await API
            .find()
            .catch((e) => {
                throw new Error(e.message)
            });
        return apis;
    }
    
    public async deleteOne() {
        const api = await API
            .findOneAndDelete()
            .where(this._id ? "_id": "partnerId")
            .equals(this._id ? this._id : this.partnerId)
            .catch((e) => {
                throw new Error(e.message);
            });

        return api;

    }
}

export default APIService;