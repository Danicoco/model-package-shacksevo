/// <reference types="mongoose" />
import { IAPI } from '../../types';
declare class APIService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IAPI>): Promise<import("mongoose").Document<unknown, any, IAPI> & IAPI & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IAPI> & IAPI & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IAPI> & IAPI & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IAPI> & IAPI & {
        _id: string;
    }) | null>;
}
export default APIService;
//# sourceMappingURL=ApiService.d.ts.map