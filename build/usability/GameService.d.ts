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
import { IGame } from '../../types';
declare class GameService implements IGame {
    _id: string;
    name: string;
    accessUrl: string;
    demoUrl: string;
    documentationUrl: string;
    integrationCount: number;
    createdAt: string;
    updatedAt: string;
    constructor(_id?: string, name?: string);
    createGame(params: Partial<IGame>): Promise<import("mongoose").Document<unknown, any, IGame> & IGame & Required<{
        _id: string;
    }>>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & Required<{
        _id: string;
    }>) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & Required<{
        _id: string;
    }>)[]>;
    updateOne(params: Partial<IGame>): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & Required<{
        _id: string;
    }>) | null>;
    deleteOne(): Promise<import("mongodb").DeleteResult>;
}
export default GameService;
//# sourceMappingURL=GameService.d.ts.map