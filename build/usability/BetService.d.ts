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
import { IBetPlaced, IPaginator } from "../../types";
import { ClientSession, FilterQuery, PipelineStage, QueryOptions } from "mongoose";
import { AnyBulkWriteOperation } from "mongodb";
declare class BetPlacedService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IBetPlaced>): Promise<import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>>;
    findOne(filter: FilterQuery<IBetPlaced>, options: QueryOptions): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>)[]>;
    findAllGeneric(userId?: string, username?: string, gameRoundId?: string, type?: string): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>)[]>;
    findAllByAdmin(): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>)[]>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
            _id: string;
        }>, never>)[];
        pagination: {
            to: number;
            from: number;
            totalPages: number;
            total: number;
            limit: number;
            currentPage: number;
        };
    }>;
    count(condition?: any): Promise<number>;
    findByType(type: string): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>)[]>;
    singleByType(params: Partial<IBetPlaced>): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>) | null>;
    findAllUserBets(params: Partial<IBetPlaced>): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>)[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>) | null>;
    deleteMany(condition: any): Promise<import("mongodb").DeleteResult>;
    updateOne(params: Partial<IBetPlaced>, options?: QueryOptions): Promise<(import("mongoose").Document<unknown, {}, IBetPlaced> & Omit<IBetPlaced & Required<{
        _id: string;
    }>, never>) | null>;
    updateAll(params: Partial<IBetPlaced>): Promise<import("mongodb").UpdateResult>;
    aggregate(pipeline: PipelineStage[]): Promise<any[]>;
    bulkWrite(writes: AnyBulkWriteOperation<IBetPlaced>[], session?: ClientSession): Promise<import("mongodb").BulkWriteResult>;
}
export default BetPlacedService;
//# sourceMappingURL=BetService.d.ts.map