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
import { ITornament, IPaginator, ITornamentPlayers } from '../../types';
import { ObjectId } from 'mongoose';
declare class TornamentService {
    _id: string;
    partnerId?: ObjectId;
    username: string;
    constructor(_id?: string, partnerId?: ObjectId, username?: string);
    createTornament(params: Partial<ITornament>): Promise<import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
        _id: string;
    }>, never>>;
    findOne(): Promise<(import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
        _id: string;
    }>, never>) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
        _id: string;
    }>, never>)[]>;
    leaderboard(): Promise<(import("mongoose").Document<unknown, {}, import("../../types").ILeaderboard> & Omit<import("../../types").ILeaderboard & Required<{
        _id: string;
    }>, never>)[]>;
    updateTornamentPlayers(params: Partial<ITornamentPlayers>): Promise<import("mongodb").UpdateResult | (import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
        _id: string;
    }>, never>)>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: (import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
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
    updateOne(params: Partial<ITornament>): Promise<(import("mongoose").Document<unknown, {}, ITornamentPlayers> & Omit<ITornamentPlayers & Required<{
        _id: string;
    }>, never>) | null>;
    deleteOne(): Promise<import("mongodb").DeleteResult>;
}
export default TornamentService;
//# sourceMappingURL=TornamentService.d.ts.map