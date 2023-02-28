import { API } from '../models';
import { IAPI, IPaginator} from '../../types';
import Pagionation from './Pagination';


class APIService {
    private partnerId: string;
    private publicKey: string;

    constructor(partnerId = "", publicKey = "") {
        this.partnerId = partnerId;
        this.publicKey = publicKey;
    }

    public async create(params: Partial<IAPI>, withHash = false) {
        try {
            const api = new API({ ...params });
            await api.save();
            if (api && api.hashedKey && !withHash) {
                delete api.hashedKey;
            }
            return api;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne(withHash = false) {
        const api = await API
            .findOne()
            .where('partnerId')
            .equals(this.partnerId)
            .catch((e: any) => {
                throw new Error(e.message);
            });
            if (api && api.hashedKey && !withHash) {
                delete api.hashedKey;
            }
        return api;
    }

    public async findWithPublicKey(withHash = false) {
        const api = await API
            .findOne()
            .where('publicKey')
            .equals(this.publicKey)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        if (api && api.hashedKey && !withHash) {
            delete api.hashedKey;
        }
        return api;
    }

    public async findAll() {
        let apis = await API
            .find()
            .catch((e: any) => {
                throw new Error(e.message)
            });
        apis.map(api => {
            if (api.hashedKey) {
                delete api.hashedKey;
            }
            return api;
        });
        return apis;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const apis = await API
        .find({
            ...(condition && condition)
        })
        .sort(sort)
        .limit(limit)
        .skip(limit * (page - 1))
        .catch((e) => {
          throw e;
        });
        apis.map(api => {
            if (api.hashedKey) {
                delete api.hashedKey;
            }
            return api;
        });

        return {
            data: apis,
            pagination: Pagionation.builder(apis, count, { page, limit }),
        }
    }

    public async count(condition?: any) {
        const docs = await API.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async deleteOne(withHash = false) {
        const api = await API
            .findOneAndDelete({
                partnerId: this.partnerId,
                publicKey: this.publicKey
            })
            .catch((e: any) => {
                throw new Error(e.message);
            });
            if (api && api.hashedKey && !withHash) {
                delete api.hashedKey;
            }

        return api;

    }
}

export default APIService;
