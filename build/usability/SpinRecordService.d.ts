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
import { IPaginator, ISpinContructor, ISpinRecord } from "../../types";
declare class SpinRecordService {
    private model;
    private id;
    private userId;
    private partnerId;
    constructor({ id, userId, partnerId, }: Partial<ISpinContructor>);
    private finder;
    create(params: Partial<ISpinRecord>): Promise<import("mongoose").Document<unknown, {}, ISpinRecord> & Omit<ISpinRecord & Required<{
        _id: string;
    }>, never>>;
    findOne(): Promise<(import("mongoose").Document<unknown, {}, ISpinRecord> & Omit<ISpinRecord & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ISpinRecord> & Omit<ISpinRecord & Required<{
        _id: string;
    }>, never>)[]>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, ISpinRecord> & Omit<ISpinRecord & Required<{
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
    updateOne(params: Partial<ISpinRecord>): Promise<(import("mongoose").Document<unknown, {}, ISpinRecord> & Omit<ISpinRecord & Required<{
        _id: string;
    }>, never>) | null>;
}
export default SpinRecordService;
//# sourceMappingURL=SpinRecordService.d.ts.map