/// <reference types="mongoose" />
import { IUser } from "../../types";
declare class UserService {
    private _id;
    private partnerId;
    constructor(_id?: string, partnerId?: string);
    create(params: Partial<IUser>): Promise<import("mongoose").Document<unknown, any, IUser> & IUser & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IUser> & IUser & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IUser> & IUser & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IUser>): Promise<(import("mongoose").Document<unknown, any, IUser> & IUser & {
        _id: string;
    }) | null>;
    last(): Promise<import("mongoose").Document<unknown, any, IUser> & IUser & {
        _id: string;
    }>;
}
export default UserService;
//# sourceMappingURL=UserService.d.ts.map