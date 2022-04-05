import { IAdmin } from "../../types";
declare class AdminService {
    private _id;
    private email;
    constructor(_id?: string, email?: string);
    create(params: Partial<IAdmin>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    updateOne(params: Partial<IAdmin>): Promise<any>;
}
export default AdminService;
//# sourceMappingURL=AdminService.d.ts.map