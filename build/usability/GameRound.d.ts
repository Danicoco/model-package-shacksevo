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
/// <reference types="mongoose/types/inferschematype" />
import { ClientSession, FilterQuery, QueryOptions } from "mongoose";
import { IGameRound, IPaginator } from "../../types";
import { AnyBulkWriteOperation } from "mongodb";
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
    create(params: Partial<IGameRound>): Promise<import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>>;
    bulkCreate(params: Partial<IGameRound>[]): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").MergeType<import("mongoose").MergeType<IGameRound, Partial<IGameRound>>, IGameRound & Required<{
        _id: string;
    }>>> & Omit<Omit<import("mongoose").MergeType<IGameRound, Partial<IGameRound>>, keyof IGameRound> & IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    findOne(filter: FilterQuery<IGameRound>, options: QueryOptions): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    findOneCrashRound(): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    findAllByCondition({ sort, limit, condition }: IPaginator): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    findAllAdmin(): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    findByYear(): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    updateOne(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    update(filter: Partial<IGameRound>, params: Partial<IGameRound>): Promise<(IGameRound & Required<{
        _id: string;
    }>) | null>;
    bulkWrite(writes: AnyBulkWriteOperation<IGameRound>[], session?: ClientSession): Promise<import("mongodb").BulkWriteResult>;
    updateOneCrashRound(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    last(): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>)[]>;
    findOneFirst(): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    findByIsPlayed(params: boolean): Promise<(import("mongoose").Document<unknown, {}, IGameRound> & Omit<IGameRound & Required<{
        _id: string;
    }>, never>) | null>;
    deleteAll(): Promise<boolean>;
    deleteByPartnerId(): Promise<boolean>;
}
export default GameRoundService;
//# sourceMappingURL=GameRound.d.ts.map