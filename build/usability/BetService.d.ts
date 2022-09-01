/// <reference types="mongoose" />
import { IBetPlaced } from "../../types";
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
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    findAllGeneric(userId?: string, username?: string, gameRoundId?: string, type?: string): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    findAllByAdmin(): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    findByType(type: string): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    singleByType(params: Partial<IBetPlaced>): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
    findAllUserBets(params: Partial<IBetPlaced>): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
    updateOne(params: Partial<IBetPlaced>): Promise<(import("mongoose").Document<unknown, any, IBetPlaced> & IBetPlaced & {
        _id: string;
    }) | null>;
    updateAll(params: Partial<IBetPlaced>): Promise<import("mongodb").UpdateResult>;
}
export default BetPlacedService;
//# sourceMappingURL=BetService.d.ts.map