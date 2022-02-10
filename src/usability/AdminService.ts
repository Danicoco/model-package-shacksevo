import { IAdmin } from "../../types";
import { Admin } from '../models';

class AdminService {
    private _id: string;

    constructor(_id = '') {
        this._id = _id;
    }

    public async create(params: Partial<IAdmin>) {
        try {
            const admin = new Admin({ ...params });
            await admin.save();
            return admin;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const admin = await Admin
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e) => { throw new Error(e) });
        return admin;
    }

    public async findAll() {
        const admins = await Admin
            .find()
            .catch((e) => { throw new Error(e) });
        return admins;
    }

    public async updateOne(params: Partial<IAdmin>) {
        const admin = await Admin
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return admin;
    }
}

export default AdminService;