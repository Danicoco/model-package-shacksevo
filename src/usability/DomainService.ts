import { IDomain } from "../../types";
import { Domain } from '../models';

class DomainService {
    private partnerId: string;

    constructor(partnerId: string) {
        this.partnerId = partnerId;
    }

    public async create(params: Partial<IDomain>) {
        try {
            const domain = new Domain({ ...params });
            await domain.save();
            return domain;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const domain = await Domain
            .findOne({ partnerId: this.partnerId })
            .catch((e: any) => { throw new Error(e) });
        return domain;
    }

    public async findAll() {
        const domains = await Domain
            .find({})
            .catch((e: any) => { throw new Error(e) });
        return domains;
    }


    public async count(condition?: any) {
        const docs = await Domain.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async updateOne(query: Partial<IDomain>, params: Partial<IDomain>) {
        const domain = await Domain
            .findOneAndUpdate(
                { ...(query._id && { _id: query._id}), ...(query.partnerId && { partnerId: query.partnerId }) },
                { ...params },
                { new: true }
            );
        return domain;
    }
}

export default DomainService;
