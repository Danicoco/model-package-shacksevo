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
import { IPaginator, IReward } from "../../types";
import { ObjectId } from "mongoose";
declare class RewardService {
    private model;
    private _id;
    private userId;
    private partnerId?;
    constructor(_id?: string, partnerId?: ObjectId, userId?: string);
    private finder;
    create(params: Partial<IReward>): Promise<import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>>;
    findOne(): Promise<(import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>) | null>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
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
    deleteOne(): Promise<(import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>) | null>;
    setReward(_params: Partial<IReward>): Promise<(import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>)[]>;
    updateOne(params: Partial<IReward>): Promise<(import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>) | null>;
    getReward(): Promise<(import("mongoose").Document<unknown, {}, IReward> & Omit<IReward & Required<{
        _id: string;
    }>, never>)[]>;
}
export default RewardService;
//# sourceMappingURL=RewardService.d.ts.map