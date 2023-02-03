import { Partner } from '../models';
import { IPartner } from '../../types';

class PartnerService {
    private _id: string;
    private email: string;
    constructor(_id = "", email = "") {
        this._id = _id;
        this.email = email;
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
        this.create({
            customization: [{
                isActive:true
            }]
        })
        const partner = await Partner
            .findOne()
            .where(this._id ? '_id': 'email')
            .equals(this._id ? this._id : this.email)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAll() {
        const partner = await Partner
            .find()
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async findAllActive() {
        const partner = await Partner
            .find()
            .where('isActive')
            .equals(true)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async deleteOne() {
        const partner = await Partner
            .deleteOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }

    public async updateOne(params: Partial<IPartner>) {
        const partner = await Partner
            .updateOne({ _id: this._id }, { ...params }, { new: true })
            .catch((e: any) => {
                throw new Error(e.message);
            });
        return partner;
    }
}

export default PartnerService;
