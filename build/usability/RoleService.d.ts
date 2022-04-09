/// <reference types="mongoose" />
import { IRole } from "../../types";
declare class RoleService {
    private _id;
    constructor(_id?: string);
    create(params: Partial<IRole>): Promise<import("mongoose").Document<unknown, any, IRole> & IRole & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IRole> & IRole & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IRole> & IRole & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IRole>): Promise<(import("mongoose").Document<unknown, any, IRole> & IRole & {
        _id: string;
    }) | null>;
}
export default RoleService;
//# sourceMappingURL=RoleService.d.ts.map