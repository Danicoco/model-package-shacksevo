import { Partner } from '../models';
import { IPartner } from '../../types';

class PartnerService {
    private _id: string;
    constructor(_id: string) {
        this._id = _id;
    }

    public async create(params: Partial<IPartner>) {
        try {
            const partner = new Partner({ ...params });
            await partner.save();
            return partner;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async findOne() {
        const partner = await Partner
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAll() {
        const partner = await Partner
            .find()
            .catch((e) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAllActive() {
        const partner = await Partner
            .find()
            .where('isActive')
            .equals(true)
            .catch((e) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async deleteOne() {
        const partner = await Partner
            .deleteOne()
            .where('_id')
            .equals(this._id)
            .catch((e) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async updateOne(params: Partial<IPartner>) {
        const partner = await Partner
            .updateOne({ _id: this._id }, { ...params }, { new: true })
            .catch((e) => {
                throw new Error(e.message);
            });
        return partner;
    }
}

export default PartnerService;