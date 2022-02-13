
import { Schema, Types, model } from 'mongoose';
import { IRole } from '../../types';


const RoleSchema: Schema = new Schema<IRole>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    addedBy: {
        type: String,
    },
    permissionId: {
        type: Types.ObjectId,
        ref: 'permissions',
    },
    adminId: {
        type: Types.ObjectId,
        ref: 'admins',
    }
}, {
    collection: 'roles',
    versionKey: false
});

RoleSchema.set('timestamps', true);

export default model<IRole>('Roles', RoleSchema);
