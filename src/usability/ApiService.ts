import { API } from '../models';
import { IAPI} from '../../types';


class APIService {
    private partnerId: string;
    private publicKey: string;

    constructor(partnerId = "", publicKey = "") {
        this.partnerId = partnerId;
        this.publicKey = publicKey;
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
            .where('partnerId')
            .equals(this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return api;
    }

    public async findWithPublicKey() {
        const api = await API
            .findOne()
            .where('publicKey')
            .equals(this.publicKey)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return api;
    }

    public async findAll() {
        const apis = await API
            .find()
            .catch((e: any) => {
                throw new Error(e.message)
            });
        return apis;
    }
    
    public async deleteOne() {
        const api = await API
            .findOneAndDelete()
            .where("partnerId")
            .equals(this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });

        return api;

    }
}

export default APIService;