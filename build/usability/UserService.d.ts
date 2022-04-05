import { IUser } from "../../types";
declare class UserService {
    private _id;
    private partnerId;
    constructor(_id?: string, partnerId?: string);
    create(params: Partial<IUser>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    updateOne(params: Partial<IUser>): Promise<any>;
    last(): Promise<any>;
}
export default UserService;
//# sourceMappingURL=UserService.d.ts.map