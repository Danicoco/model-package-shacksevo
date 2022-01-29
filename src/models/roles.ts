
import { Schema, Types, model } from 'mongoose';
import { Role } from '../types';


const RoleSchema: Schema = new Schema<Role>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    addedBy: {
        type: String,
    },
    permission: {
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

export default model<Role>('Roles', RoleSchema);
