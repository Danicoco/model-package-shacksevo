/// <reference types="mongoose" />
import { IAdmin } from "../../types";
declare class AdminService {
    private _id;
    private email;
    constructor(_id?: string, email?: string);
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