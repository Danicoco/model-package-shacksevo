/// <reference types="mongoose" />
import { IApp } from '../../types';
declare class AppService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IApp>): Promise<import("mongoose").Document<unknown, any, IApp> & IApp & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IApp> & IApp & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IApp> & IApp & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IApp> & IApp & {
        _id: string;
    }) | null>;
}
export default AppService;
//# sourceMappingURL=AppService.d.ts.map