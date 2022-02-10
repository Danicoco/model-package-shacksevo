/// <reference types="mongoose" />
import { IAdmin } from "../../types";
declare class AdminService {
    private _id;
    constructor(_id?: string);
    create(params: Partial<IAdmin>): Promise<import("mongoose").Document<unknown, any, IAdmin> & IAdmin & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IAdmin> & IAdmin & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IAdmin> & IAdmin & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IAdmin>): Promise<(import("mongoose").Document<unknown, any, IAdmin> & IAdmin & {
        _id: string;
    }) | null>;
}
export default AdminService;
//# sourceMappingURL=AdminService.d.ts.map