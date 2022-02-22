import { IRole } from "../../types";
import { Role } from '../models';

class RoleService {
    private _id: string;

    constructor(_id = '') {
        this._id = _id;
    }

    public async create(params: Partial<IRole>) {
        try {
            const role = new Role({ ...params });
            await role.save();
            return role;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const role = await Role
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e: any) => { throw new Error(e) });
        return role;
    }

    public async findAll() {
        const roles = await Role
            .find()
            .catch((e: any) => { throw new Error(e) });
        return roles;
    }

    public async updateOne(params: Partial<IRole>) {
        const role = await Role
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return role;
    }
}

export default RoleService;