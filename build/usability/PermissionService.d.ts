import { IPermission } from '../../types';
declare class PermissionService {
    private _id;
    constructor(_id: string | null);
    create(params: Partial<IPermission>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    deleteOne(): Promise<any>;
}
export default PermissionService;
//# sourceMappingURL=PermissionService.d.ts.map