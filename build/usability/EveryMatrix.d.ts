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
import { IEveryMatrix, IPaginator } from "../../types";
declare class EveryMatrixService {
    private model;
    private id;
    private userId;
    private username;
    private partnerId;
    constructor(id?: string, userId?: string, username?: string, partnerId?: string);
    create(params: Partial<IEveryMatrix>): Promise<import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>) | null>;
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>)[]>;
    findAllGeneric(userId?: string, username?: string): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>)[]>;
    findAllByAdmin(): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>)[]>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
            _id: string;
        }>)[];
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
    findByType(type: string): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>)[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>) | null>;
    updateOne(params: Partial<IEveryMatrix>): Promise<(import("mongoose").Document<unknown, any, IEveryMatrix> & IEveryMatrix & Required<{
        _id: string;
    }>) | null>;
    updateAll(params: Partial<IEveryMatrix>): Promise<import("mongodb").UpdateResult>;
}
export default EveryMatrixService;
//# sourceMappingURL=EveryMatrix.d.ts.map