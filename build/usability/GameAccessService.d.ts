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
import { IGameAccess } from '../../types';
import { ClientSession } from 'mongoose';
declare class GameAccessService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IGameAccess>): Promise<import("mongoose").Document<unknown, {}, IGameAccess> & Omit<IGameAccess & Required<{
        _id: string;
    }>, never>>;
    insert(params: Partial<IGameAccess>[], session?: ClientSession): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").MergeType<import("mongoose").MergeType<IGameAccess, Partial<IGameAccess>[]>, IGameAccess & Required<{
        _id: string;
    }>>> & Omit<Omit<import("mongoose").MergeType<IGameAccess, Partial<IGameAccess>[]>, keyof IGameAccess> & IGameAccess & Required<{
        _id: string;
    }>, never>)[]>;
    findOne(select?: string): Promise<(import("mongoose").Document<unknown, {}, IGameAccess> & Omit<IGameAccess & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(select?: string): Promise<(import("mongoose").Document<unknown, {}, IGameAccess> & Omit<IGameAccess & Required<{
        _id: string;
    }>, never>)[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, {}, IGameAccess> & Omit<IGameAccess & Required<{
        _id: string;
    }>, never>) | null>;
    deleteByPartnerId(): Promise<import("mongodb").DeleteResult>;
    deleteAll(): Promise<import("mongodb").DeleteResult>;
}
export default GameAccessService;
//# sourceMappingURL=GameAccessService.d.ts.map