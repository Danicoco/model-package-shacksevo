import { Permission } from '../models';
import { IPermission} from '../../types';


class PermissionService {
    private _id: string | null;

    constructor(_id: string | null) {
        this._id = _id;
    }

    public async create(params: Partial<IPermission>) {
        try {
            const permission = new Permission({ ...params });
            await permission.save();
            return permission;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public async findOne() {
        const permission = await Permission
            .findOne()
            .where('_id')
            .equals(this._id)
            .catch((e) => {
                throw new Error(e.message);
            });
        return permission;
    }

    public async findAll() {
        const permissions = await Permission
            .find()
            .catch((e) => {
                throw new Error(e.message)
            });
        return permissions;
    }
    
    public async deleteOne() {
        const permission = await Permission
            .findOneAndDelete()
            .where("_id")
            .equals(this._id)
            .catch((e) => {
                throw new Error(e.message);
            });

        return permission;

    }
}

export default PermissionService;