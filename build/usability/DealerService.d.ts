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
import { ClientSession } from "mongoose";
import { IDealer, IPaginator } from "../../types";
declare class DealerService {
    private model;
    private finderOptions;
    private composeFinder;
    constructor(finderOptions: Partial<IDealer>);
    create(params: IDealer, session?: ClientSession): Promise<IDealer>;
    bulkCreate(params: Array<IDealer>, session?: ClientSession): Promise<IDealer[]>;
    update(param: Partial<IDealer>, session?: ClientSession): Promise<IDealer>;
    updateMany(param: Partial<IDealer>, session?: ClientSession): Promise<IDealer & Required<{
        _id: string;
    }>>;
    bulkWrite(param: any[], session?: ClientSession): Promise<import("mongodb").BulkWriteResult>;
    findOne(session?: ClientSession): Promise<IDealer | null>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, IDealer> & Omit<IDealer & Required<{
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
}
export default DealerService;
//# sourceMappingURL=DealerService.d.ts.map