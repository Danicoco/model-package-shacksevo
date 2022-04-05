import { IRole } from "../../types";
declare class RoleService {
    private _id;
    constructor(_id?: string);
    create(params: Partial<IRole>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    updateOne(params: Partial<IRole>): Promise<any>;
}
export default RoleService;
//# sourceMappingURL=RoleService.d.ts.map