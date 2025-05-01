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
import { IDashboard, IPaginator } from "../../types";
declare class DashboardService {
    private model;
    private finderOptions;
    private composeFinder;
    constructor(finderOptions: Partial<IDashboard> | FilterQuery<IDashboard>);
    create(params: Partial<IDashboard>, session?: ClientSession): Promise<import("mongoose").Document<unknown, {}, IDashboard> & Omit<IDashboard & Required<{
        _id: string;
    }>, never>>;
    findOne(options?: QueryOptions): Promise<IDashboard | null>;
    count(): Promise<number>;
    findAllPaginated({ sort, limit, page }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, IDashboard> & Omit<IDashboard & Required<{
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
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IDashboard> & Omit<IDashboard & Required<{
        _id: string;
    }>, never>)[]>;
    updateOne(params: Partial<IDashboard>, session?: ClientSession): Promise<(import("mongoose").Document<unknown, {}, IDashboard> & Omit<IDashboard & Required<{
        _id: string;
    }>, never>) | null>;
    deleteOne(session?: ClientSession): Promise<import("mongodb").DeleteResult>;
    logChanges(changeEvent: any): Promise<void>;
}
export default DashboardService;
//# sourceMappingURL=DashboardService.d.ts.map