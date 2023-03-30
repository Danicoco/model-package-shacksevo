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
import { IAPI, IPaginator } from '../../types';
declare class APIService {
    private partnerId;
    private publicKey;
    private hashedKey;
    private id;
    constructor(partnerId?: string, publicKey?: string, hashedKey?: string, id?: string);
    create(params: Partial<IAPI>, withHash?: boolean): Promise<import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>>;
    findOne(withHash?: boolean): Promise<(import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>) | null>;
    findWithPublicKey(withHash?: boolean): Promise<(import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>)[]>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
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
    deleteOne(withHash?: boolean): Promise<(import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>) | null>;
    updateOne(params: Partial<IAPI>, withHash?: boolean): Promise<(import("mongoose").Document<unknown, {}, IAPI> & Omit<IAPI & Required<{
        _id: string;
    }>, never>) | null>;
}
export default APIService;
//# sourceMappingURL=ApiService.d.ts.map