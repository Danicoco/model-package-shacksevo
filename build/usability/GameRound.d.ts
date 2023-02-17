/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { IGameRound, IPaginator } from "../../types";
declare class GameRoundService {
    _id: string;
    eventId: string;
    gameOdd: string;
    createdAt: string;
    updatedAt: string;
    eventTypes: never[];
    eventRanges: never[];
    partnerName: string;
    algorithmUsed: string;
    partnerId: string;
    numberOfBetPlaced: number;
    year: string;
    crashRoundId: string;
    constructor(_id?: string, partnerId?: string, year?: string, crashRoundId?: string);
    create(params: Partial<IGameRound>): Promise<import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>>;
    bulkCreate(params: Partial<IGameRound>[]): Promise<(import("mongoose").Document<unknown, any, import("mongoose").MergeType<import("mongoose").MergeType<IGameRound, Partial<IGameRound>>, IGameRound & Required<{
        _id: string;
    }>>> & Omit<import("mongoose").MergeType<IGameRound, Partial<IGameRound>>, keyof IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    findOneCrashRound(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    findAllByCondition({ sort, limit, condition }: IPaginator): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    findAllAdmin(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    findByYear(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    updateOne(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    updateOneCrashRound(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    last(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>)[]>;
    findOneFirst(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    findByIsPlayed(params: boolean): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & Required<{
        _id: string;
    }>) | null>;
    deleteAll(): Promise<boolean>;
    deleteByPartnerId(): Promise<boolean>;
}
export default GameRoundService;
//# sourceMappingURL=GameRound.d.ts.map