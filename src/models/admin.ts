import { Schema, Types, model } from 'mongoose';
import { IAdmin } from '../types';

const AdminSchema: Schema = new Schema<IAdmin>({
    fullName: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Types.ObjectId,
        ref: 'roles'
    },
    
    isActive: {
        type: Boolean,
        default: false,
    },
}, {
    collection: 'admins',
    versionKey: false
});

AdminSchema.set('timestamps', true);

export default model<IAdmin>('Admins', AdminSchema);
