/// <reference types="mongoose" />
import { IPermission } from '../../types';
declare class PermissionService {
    private _id;
    constructor(_id: string | null);
    create(params: Partial<IPermission>): Promise<import("mongoose").Document<unknown, any, IPermission> & IPermission & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IPermission> & IPermission & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IPermission> & IPermission & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IPermission> & IPermission & {
        _id: string;
    }) | null>;
}
export default PermissionService;
//# sourceMappingURL=PermissionService.d.ts.map