/// <reference types="mongoose" />
import { IBetPlaced } from '../types';
declare class BetPlacedService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IBetPlaced>): Promise<import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
    updateOne(params: IBetPlaced): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
}
export default BetPlacedService;
//# sourceMappingURL=BetService.d.ts.map