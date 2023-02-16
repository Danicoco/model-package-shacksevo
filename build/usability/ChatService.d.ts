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
import { IChat, IPaginator } from "../../types";
declare class ChatService {
    private _id;
    private partnerId;
    constructor(_id?: string, partnerId?: string);
    create(params: Partial<IChat>): Promise<import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
        _id: string;
    }>>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
        _id: string;
    }>) | null>;
    count(condition?: any): Promise<number>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
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
    findAll(): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
        _id: string;
    }>)[]>;
    findAllPartner(): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
        _id: string;
    }>)[]>;
    updateOne(params: Partial<IChat>): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & Required<{
        _id: string;
    }>) | null>;
}
export default ChatService;
//# sourceMappingURL=ChatService.d.ts.map